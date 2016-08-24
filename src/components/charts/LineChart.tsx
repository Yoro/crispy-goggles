import * as React from 'react';
import { IChart } from './IChart';
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory';

export class LineChart extends IChart {
    render() {
      return (
          <div>
            <VictoryChart>
              <VictoryLine
                data={this.props.data}
                animate={{
                  duration: 500
                }}
              /> 
              <VictoryScatter
                standalone={false}
                style={{
                  data: {
                    fill: "blue",
                    stroke: "lightblue",
                    strokeWidth: 3
                  }
                }}
                animate={{
                  duration: 500
                }}
                size={6}
                data={this.props.data}
              />
            </VictoryChart>
          </div>
      )
    }
}
