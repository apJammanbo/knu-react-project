import React from 'react';
import Paper from '@material-ui/core/Paper'
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
;

const RaderChartBox = ({data}) => {
  //{ name, korean, english, math, physical, music, art };
  const raderData = [
  { subject: '국어', score: data[0].korean},
  { subject: '영어', score: data[0].english},
  { subject: '수학', score: data[0].math},
  { subject: '체육', score: data[0].physical},
  { subject: '음악', score: data[0].music},
  { subject: '미술', score: data[0].art},
];

  return (
    <Paper style={{display: "flex", justifyContent: "center"}}>
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={raderData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name={data.name} dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </Paper>
  );
}

export default RaderChartBox;