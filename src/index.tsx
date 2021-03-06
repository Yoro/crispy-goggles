/// <reference path="../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import  { Toolbox, ToolboxProps } from './components/toolbox/Toolbox';

ReactDOM.render(
    <Toolbox data={[]} chartType='BarChart'/>,
    document.getElementById("toolbox-placeholder")
);
