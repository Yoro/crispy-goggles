import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter }  from 'fbemitter';
import { DataConstants } from '../constants/DataConstants';
import { DataViewAction } from '../actions/DataActions';

export var CHANGE_EVENT = 'change';

class StaticDataStore extends EventEmitter {
  private _data: Array<any>;
  constructor() {
    super();
    this._data = new Array<any>();
    AppDispatcher.register( ( payload:any ) => this.handleActions( payload ) );
  }

  create( x:number, y:number ) {
    this._data.push( { 'x' : x,'y' : y } );
  }

  getAll() {
    return this._data;
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
    if ( payload.action && payload.action instanceof DataViewAction ) {
      switch( payload.action.actionType ) {
        case DataConstants.DATA_ADD_SET :
            this.create( this._data.length, payload.action.data );
            this.emitChange();
        break;
        case DataConstants.DATA_CHANGE :
            this._data = payload.action.data;
            this.emitChange();
        break;
        default:
      }
    } else {
      console.log( 'Source not available for action', payload.action );
    }
  }
}

var DataStore:StaticDataStore = new StaticDataStore();
export default DataStore;
