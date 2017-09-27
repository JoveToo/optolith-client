import * as ActionTypes from '../constants/ActionTypes';

export interface SwitchEnableActiveItemHintsAction {
	type: ActionTypes.SWITCH_ENABLE_ACTIVE_ITEM_HINTS;
}

export function _switchEnableActiveItemHints(): SwitchEnableActiveItemHintsAction {
	return {
		type: ActionTypes.SWITCH_ENABLE_ACTIVE_ITEM_HINTS
	};
}

export interface SetThemeAction {
	type: ActionTypes.SET_THEME;
	payload: {
		theme: string;
	};
}

export function setTheme(theme: string): SetThemeAction {
	return {
		type: ActionTypes.SET_THEME,
		payload: {
			theme
		}
	};
}