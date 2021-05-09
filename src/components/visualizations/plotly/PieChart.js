import React, {useState} from 'react';
import Plot from "react-plotly.js";

// Datas
const traceA = {
    type: "pie",
    values: [8149300, 4916438, 4776980, 3100950, 2083210],
    labels: ['Russia', 'Canada', 'Brazil', 'United States', 'China'],
    hole: 0.25,
    pull: [0.1, 0, 0, 0, 0],
    direction: 'clockwise',
    marker: {
      colors: ['#CDDC39', '#673AB7', '#F44336', '#00BCD4', '#607D8B'],
      line: {
        color: 'black',
        width: 3
      }
    },
    textfont: {
      family: 'Tahoma',
      color: 'white',
      size: 18
    },
    hoverlabel: {
      bgcolor: 'black',
      bordercolor: 'black',
      font: {
        color: 'white',
        size: 18
      }
    },
  };



const PieChart = () => {
    const [datas, setDatas] = useState([traceA])
    return (
        <Plot 
            data={datas}
            layout={
              {
                title: "Area Under Forest for Different Countries",  height: "auto",width: "auto",
                paper_bgcolor: 'rgb(0, 0, 0)',
                plot_bgcolor: 'rgb(254, 247, 234)',
              }
            }
        />
    );
} 


export default PieChart;