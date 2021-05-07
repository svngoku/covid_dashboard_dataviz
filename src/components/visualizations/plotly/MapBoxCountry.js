import React, {useState} from 'react';
import Plot from "react-plotly.js"

const data = [{
    type: 'scattergeo',
    mode: 'markers',
    locations: ['FR', 'DEU', 'RUS', 'ESP', 'USA'],
    marker: {
        size: [20, 30, 15, 10, 80],
        color: [10, 20, 40, 50, 50],
        cmin: 0,
        cmax: 1000,
        colorscale: 'Red',
        // colorbar: {
        //     title: 'Rate',
        //     ticksuffix: '%',
        //     showticksuffix: 'last'
        // },
        line: {
            color: 'black'
        }
    },
    name: 'World Covid Data'
}];


const MapBoxCountry = () => {
    const [datas, setDatas] = useState(data)
    return (
        <Plot 
            data={datas}
            layout={{
                geo: {
                    scope: 'world',
                    resolution: "50"
                  }
            }}
        />
    );
} 


export default MapBoxCountry;