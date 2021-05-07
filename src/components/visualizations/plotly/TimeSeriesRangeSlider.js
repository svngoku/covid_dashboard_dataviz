import React, {useState, useEffect } from 'react';
import Plot from "react-plotly.js";
import * as d3 from "d3";
// import axios from "axios";



const TimeSeriesRangeSlider = () => {
    const [datas, setDatas] = useState([]);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        // retrieveData();
    }, [])

    const retrieveData = () => {
        d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows) {
            const unpack = (rows, key) => rows.map(row => row[key]);
            const trace1 = {
                type: "scatter",
                mode: "lines",
                x: unpack(rows, 'Date'),
                y: unpack(rows, 'AAPL.High'),
                line: {color: '#17BECF'}
            }

            const trace2 = {
                type: "scatter",
                mode: "lines",
                x: unpack(rows, 'Date'),
                y: unpack(rows, 'AAPL.Low'),
                line: {color: '#7F7F7F'}
            }
            // setDatas([trace1, trace2])
            return {
                trace1, trace2
            }
        });
    }
    
    return (
        <Plot 
            data={datas}
            layout={{
                title: 'Custom Range',
                xaxis: {
                    range: ['2016-07-01', '2016-12-31'],
                    type: 'date'
                },
                yaxis: {
                    autorange: true,
                    range: ["86.8700008333", "138.870004167"],
                    type: 'linear'
                }
            }}
        />
    );
} 


export default TimeSeriesRangeSlider;