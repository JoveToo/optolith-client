import { app, BrowserWindow, ipcMain } from 'electron';
import * as log from 'electron-log';
import { autoUpdater, UpdateInfo } from 'electron-updater';
import windowStateKeeper = require('electron-window-state');
import * as path from 'path';
import * as url from 'url';

export interface ProgressInfo {
	bytesPerSecond: number;
	percent: number;
	transferred: number;
	total: number;
}

app.setAppUserModelId('lukasobermann.optolyth');

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";

autoUpdater.autoDownload = false;
autoUpdater.allowDowngrade = true;

let mainWindow: Electron.BrowserWindow | null | undefined;

function createWindow() {
	const mainWindowState = windowStateKeeper({
		defaultHeight: 720,
		defaultWidth: 1280,
		file: 'window.json'
	});

	mainWindow = new BrowserWindow({
		x: mainWindowState.x,
		y: mainWindowState.y,
		height: mainWindowState.height,
		width: mainWindowState.width,
		minHeight: 720,
		minWidth: 1280,
		resizable: true,
		icon: path.join(app.getAppPath(), 'app', 'icon.png'),
		frame: false,
		center: true,
		title: 'TDE Heroes',
		titleBarStyle: 'hidden',
		acceptFirstMouse: true,
		backgroundColor: '#000000',
		show: false
	});

	mainWindowState.manage(mainWindow);

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	// mainWindow.webContents.openDevTools();

	mainWindow.once('ready-to-show', () => {
		mainWindow!.show();
		if (mainWindowState.isMaximized) {
			mainWindow!.maximize();
		}

		autoUpdater.checkForUpdates();

		autoUpdater.addListener('update-available', (info: UpdateInfo) => {
			mainWindow!.webContents.send('update-available', info);
		});

		// @ts-ignore
		ipcMain.addListener('download-update', () => {
			autoUpdater.downloadUpdate();
		});

		autoUpdater.addListener('download-progress', (progressObj: ProgressInfo) => {
			mainWindow!.webContents.send('download-progress', progressObj);
		});

		autoUpdater.addListener('error', (err: Error) => {
			mainWindow!.webContents.send('auto-updater-error', err);
		});

		autoUpdater.addListener('update-downloaded', () => {
		  autoUpdater.quitAndInstall();
		});
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
