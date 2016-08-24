import * as React from 'react';
import { IChart } from './IChart';
import { VictoryChart, VictoryBar } from 'victory';

export class BarChart extends IChart {
    render() {
        return (
          <VictoryChart>
            <VictoryBar
              data={this.props.data}
              style={{
                data: {
                  fill: "lightblue"
                }
              }}
              animate={{
                duration: 500
              }}
              />
          </VictoryChart>
      )
    }
}
