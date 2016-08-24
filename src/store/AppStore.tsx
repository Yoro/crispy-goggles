import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter }  from 'fbemitter';
import { AppConstants } from '../constants/AppConstants';
import { AppViewAction } from '../actions/AppActions';

export var CHANGE_EVENT = 'change';

class StaticAppStore extends EventEmitter {
  private _settings: Array<any>;
  constructor() {
    super();
    this._settings = new Array<any>();
    AppDispatcher.register( ( payload:any ) => this.handleActions( payload ) );
  }

  setSetting( name:any, value:any ) {
    this._settings[ name ] = value;
  }

  getAllSettings() {
    return this._settings;
  }

  emitChange() {
    this.emit( CHANGE_EVENT );
  }

  addChangeListener( callback:any ) {
    this.addListener( CHANGE_EVENT, callback );
  }

  removeChangeListener( callback:any ) {
    this.removeAllListeners( CHANGE_EVENT );
  }

  handleActions( payload:any ) {
    if ( payload.action && payload.action instanceof AppViewAction ) {
      switch( payload.action.actionType ) {
        case AppConstants.APP_SETTINGS_CHANGE :
          for ( var index in payload.action.settings ) {
            this.setSetting( index, payload.action.settings[ index ] );
          }
          this.emitChange();
        break;
        default:
      }
    } else {
      console.log( 'Source not available for action', payload.action );
    }
  }
}

var AppStore:StaticAppStore = new StaticAppStore();
export default AppStore;
