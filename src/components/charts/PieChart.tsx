import * as React from 'react';
import { IChart } from './IChart';
import { VictoryPie } from 'victory';

var animalsListe = [
  'loup',
  'lynx',
  'renard',
  'cerf',
  'chevreuil',
  'sanglier',
  'lièvre',
  'lapin de garenne',
  'pigeon',
  'canard',
  'penda',
  'dorade',
  'Autres'
]

export class PieChart extends IChart {
    render() {
        return (
          <VictoryPie data={this.props.data}
            colorScale={"cool"}
            animate={{
              duration: 1000,
              onEnter: {
                duration: 500,
                before: () =>
                  ( { y: 0, label: " " } ),
                after: ( datum ) =>
                  ( { y: datum.y, label: animalsListe[ datum.x % animalsListe.length ] } )
                }}}
          />
        )
    }
}
