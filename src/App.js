import React from 'react';
import './App.css';
import Header from "./Header";
import DataTable from "./DataTable";
import ScatterChartBox from "./ScatterChartBox";
import RadarChartBox from "./RadarChartBox";

const  createData = (name, korean, english, math, physical, music, art) => {
  return { name, korean, english, math, physical, music, art };
}

const data = [
  createData('영호', 72, 90, 72, 90, 92, 91),
  createData('지영', 81, 100, 72, 90, 93, 90),
  createData('지은', 99, 99, 72, 90, 94, 100),
  createData('영희', 100, 94, 72, 90, 95, 91),
  createData('영수', 55, 82, 72, 90, 90, 88),
  createData('지훈', 75, 95, 72, 90, 94, 100),
  createData('원진', 85, 78, 72, 90, 76, 98),
  createData('지연', 85, 92, 72, 90, 90, 95),
  createData('창규', 90, 85, 72, 90, 93, 94),
  createData('수진', 93, 70, 72, 90, 88, 88),
  createData('동혁', 100, 68, 72, 90, 84, 79),
  createData('민지', 88, 100, 72, 90, 86, 76),
  createData('민수', 71, 96, 72, 90, 79, 98),
  createData('미라', 79, 94, 72, 90, 99, 95),
  createData('은지', 68, 88, 72, 90, 91, 92),
  createData('민영', 93, 75, 72, 90, 98, 94),
  createData('범식', 69, 69, 72, 90, 78, 98),
  createData('호철', 88, 91, 72, 90, 94, 94),
  createData('성훈', 99, 85, 72, 90, 97, 96),
  createData('기덕', 98, 83, 72, 90, 99, 94)
]

const App = () => {
  return (
    <div className="App">
      <Header/>
      <DataTable data={data}/>
      <ScatterChartBox data={data}/>
      <RadarChartBox data={data}/>
    </div>
  );
}

export default App;
