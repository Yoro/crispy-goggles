import * as React from 'react';

import { Data } from '../data/Data'
import { BarChart } from '../charts/BarChart';
import { PieChart } from '../charts/PieChart';
import { LineChart } from '../charts/LineChart';
import AppStore from '../../store/AppStore';
import AppActions from '../../actions/AppActions';
import DataStore from '../../store/DataStore';
import DataActions from '../../actions/DataActions';

var DefaultData = [{x:0,y:2},{x:1,y:10},{x:2,y:12},{x:3,y:9},{x:4,y:12}];

export interface ToolboxProps {
  data:Array<any>,
  chartType:String
}
export interface ToolboxState {
  data:Array<any>,
  chartType:String
}

export class Toolbox extends React.Component<ToolboxProps, ToolboxState> {
  constructor( props:ToolboxProps ) {
    super( props );
    if ( props.data && props.data.length > 0 ) {
      this.state = { data: props.data, chartType: props.chartType };
    } else {
      this.state = { data: DefaultData, chartType: 'BarChart' };
    }
  }

  componentDidMount() {
    DataStore.addChangeListener( () => { this._onDataChange() } );
    AppStore.addChangeListener( () => { this._onSettingsChange() } );
  }

  render() {
    var chart:any;
    switch ( this.state.chartType ) {
      case 'PieChart' :
        chart = <PieChart data={this.state.data} />;
      break;
      case 'LineChart' :
        chart = <LineChart data={this.state.data} />;
      break;
      default:
        chart = <BarChart data={this.state.data} />;
    }
    return (
      <div className=''>
        <div className='col-md-6 col-xs-12'>
          <div className='row'>
            <Data data={[]}/>
          </div>
        </div>
        <div className='col-md-1 col-xs-2'>
          <div onClick={ ( event:any ) => { this._onChangeToBarChart( event ); } }>
            <i className="fa fa-bar-chart fa-4x"></i>
          </div>
        </div>
        <div className='col-md-1 col-xs-2'>
          <div onClick={ ( event:any ) => { this._onChangeToPieChart( event ); } }>
            <i className="fa fa-pie-chart fa-4x"></i>
          </div>
        </div>
        <div className='col-md-1 col-xs-2'>
          <div onClick={ ( event:any ) => { this._onChangeToLineChart( event ); } }>
            <i className="fa fa-line-chart fa-4x"></i>
          </div>
        </div>
        <div className='col-md-12 col-xs-10'>
          { chart }
        </div>
      </div>
    );
  }

  private _onChangeToBarChart( event:any) {
    var settingsToChange:any= new Array<any>();
    settingsToChange[ 'chartType' ] = 'BarChart';
    AppActions.settingsChange( settingsToChange );
  }

  private _onChangeToPieChart( event:any ) {
      var settingsToChange:any = new Array<any>();
      settingsToChange[ 'chartType' ] = 'PieChart';
      AppActions.settingsChange( settingsToChange );
  }

  private _onChangeToLineChart( event:any ) {
      var settingsToChange:any = new Array<any>();
      settingsToChange[ 'chartType' ] = 'LineChart';
      AppActions.settingsChange( settingsToChange );
  }

  private _onSettingsChange() {
    var state = this.state
    var settings:any = AppStore.getAllSettings()
    console.log( settings );
    if ( settings[ 'chartType' ] ) {
      state.chartType = String( settings[ 'chartType' ] );
      this.setState( state );
    }
  }

  private _onDataChange() {
    var state = this.state
    state.data = DataStore.getAll()
    this.setState( state );
  }
}
