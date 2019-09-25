import React from 'react';
import Paper from '@material-ui/core/Paper'
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const ScatterChartBox = ({data}) => {
  //{ name, korean, english, math, physical, music, art };
  return (
    <Paper style={{display: "flex", justifyContent: "center"}}>
    <ScatterChart
      width={400}
      height={400}
      margin={{
        top: 20, right: 20, bottom: 20, left: 20,
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="korean" name="korean" unit="" />
      <YAxis type="number" dataKey="english" name="english" unit="" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="A school" data={data} fill="#8884d8" />
    </ScatterChart>
    </Paper>
  );
}

export default ScatterChartBox;