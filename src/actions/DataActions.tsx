import AppDispatcher from '../dispatcher/AppDispatcher';
import { DataConstants } from '../constants/DataConstants';
import { IViewAction } from './AppActions';

export class DataViewAction implements IViewAction {
  public actionType:number;
  public data:Array<any>;
}

class StaticDataActions {
  dataChange( data:Array<any> ) {
    var action = new DataViewAction();
    action.actionType = DataConstants.DATA_CHANGE;
    action.data = data;
    AppDispatcher.handleViewAction( action );
  }
};

var DataActions = new StaticDataActions();
export default DataActions;
