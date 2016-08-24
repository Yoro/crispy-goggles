import AppDispatcher from '../dispatcher/AppDispatcher';
import { AppConstants } from '../constants/AppConstants';

export interface IViewAction {
  actionType:number;
}

export class AppViewAction implements IViewAction {
  public actionType:number;
  public settings:Array<any>;
}

class StaticAppActions {
  settingsChange( settings:Array<any> ) {
    var action = new AppViewAction();
    action.actionType = AppConstants.APP_SETTINGS_CHANGE;
    action.settings = settings;
    AppDispatcher.handleViewAction( action );
  }
};

var AppActions = new StaticAppActions();
export default AppActions;
