import React, {useState} from 'react';
import Plot from "react-plotly.js";

// Datas
const traceA = {
    x: [1, 5, 13, 24, 35, 46, 60],
    y: [80, 40, 70, 65, 15, 75, 49],
    type: 'scatter'
  };
   
const traceB = {
    x: [4, 9, 17, 21, 31, 42, 56],
    y: [64, 81, 3, 49, 25, 17, 26],
    type: 'scatter'
};



const PlotlyLine = () => {
    const [datas, setDatas] = useState([traceA, traceB])
    return (
        <Plot 
            data={datas}
            layout={
                {title: "Basic Layout"}
            }
        />
    );
} 


export default PlotlyLine;