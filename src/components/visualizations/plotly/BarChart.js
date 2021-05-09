import React, {useState, useEffect} from 'react';
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
                    title: "Basic Bar Chart",
                    paper_bgcolor: 'rgb(0, 0, 0)',
                    plot_bgcolor: 'rgb(0, 0, 0)',
                }}
            />
        </div>
    );
} 


export default BarChart;