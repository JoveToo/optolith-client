import { connect } from "react-redux"
import { fromJust, isJust, Maybe } from "../../Data/Maybe"
import { ReduxDispatch } from "../Actions/Actions"
import * as ConfigActions from "../Actions/ConfigActions"
import * as IOActions from "../Actions/IOActions"
import * as LocaleActions from "../Actions/LocaleActions"
import { AppStateRecord } from "../Models/AppState"
import { Locale, Theme } from "../Models/Config"
import { getUserSelectableSupportedLanguages } from "../Selectors/localeSelectors"
import { getLocaleId, getLocaleType } from "../Selectors/stateSelectors"
import { areAnimationsEnabled, getIsEditingHeroAfterCreationPhaseEnabled, getTheme } from "../Selectors/uisettingsSelectors"
import { Settings, SettingsDispatchProps, SettingsOwnProps, SettingsStateProps } from "../Views/Settings/Settings"

const mapStateToProps = (state: AppStateRecord): SettingsStateProps => ({
  localeString: getLocaleId (state),
  localeType: getLocaleType (state),
  isEditingHeroAfterCreationPhaseEnabled: getIsEditingHeroAfterCreationPhaseEnabled (state),
  areAnimationsEnabled: areAnimationsEnabled (state),
  theme: getTheme (state),
  languages: getUserSelectableSupportedLanguages (state),
})

const mapDispatchToProps = (dispatch: ReduxDispatch): SettingsDispatchProps => ({
  setTheme (theme: Maybe<Theme>) {
    if (isJust (theme)) {
      dispatch (ConfigActions.setTheme (fromJust (theme)))
    }
  },
  switchEnableEditingHeroAfterCreationPhase () {
    dispatch (ConfigActions.switchEnableEditingHeroAfterCreationPhase ())
  },
  async saveConfig () {
    await dispatch (IOActions.requestConfigSave)
  },
  setLocale (id: Maybe<Locale>) {
    dispatch (LocaleActions.setLocale (id))
  },
  switchEnableAnimations () {
    dispatch (ConfigActions.switchEnableAnimations ())
  },
})

const connectSettings =
  connect<SettingsStateProps, SettingsDispatchProps, SettingsOwnProps, AppStateRecord> (
    mapStateToProps,
    mapDispatchToProps
  )

export const SettingsContainer = connectSettings (Settings)
