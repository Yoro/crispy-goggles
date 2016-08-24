import { Dispatcher } from './Dispatcher';
import { IViewAction } from '../actions/AppActions';

class StaticAppDispatcher extends Dispatcher {
  constructor(){
    super();
  }
  public handleViewAction( action:IViewAction ) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
}

var AppDispatcher:StaticAppDispatcher = new StaticAppDispatcher();
export default AppDispatcher;
