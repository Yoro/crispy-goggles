import * as React from 'react';
import DataStore from "../../store/DataStore";
import DataActions from "../../actions/DataActions";

var ENTER_KEY_CODE = 13;

export interface DataProps {
  data:Array<any>
}

export interface DataState {
  data:Array<any>
}

export class Data extends React.Component<DataProps, DataState> {
  componentDidMount() {
    DataStore.addChangeListener( () => { this._onDataChange() } );
  }

  render() {
    return (
        <div className="form-group">
          <label className="sr-only" htmlFor="data-input">Data : </label>
          <div className="input-group">
            <div className="input-group-addon">
              <i className="fa fa-table"></i>
            </div>
            <input
              className='form-control'
              type="text"
              id='data-input'
              placeholder='10;20;30'
              onKeyUp={ ( event:any )=>{ this._keyUp( event ) } } />
          </div>
        </div>
    );
  }

  private _keyUp( event:any ) {
    if ( event.keyCode == ENTER_KEY_CODE ) {
      if( event.target.value && event.target.value.length > 0 ) {
        var rawData = event.target.value.split( ';' );
        var data = Array<any>();
        for( var index in rawData ) {
          if ( !isNaN( parseFloat( rawData[ index ] ) ) ) {
            data.push( { x:index, y:parseFloat( rawData[ index ] ) } );
          }
        }
        DataActions.dataChange( data );
      }
    }
  }

  private _onDataChange() {
    this.setState({ data: DataStore.getAll() });
  }
}
