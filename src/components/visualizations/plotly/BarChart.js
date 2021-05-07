import React, {useState} from 'react';
import Plot from "react-plotly.js"


const data = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    mode: 'lines',
    type: 'bar',
  };


const BarChart = () => {
    const [datas, setDatas] = useState([data])
    return (
        <div>
            <Plot 
                data={datas}
                layout={{
                    width: "600", height: "400",
                    title: "Basic Bar Chart"
                }}
            />
        </div>
    );
} 


export default BarChart;