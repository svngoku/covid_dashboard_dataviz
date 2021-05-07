import * as d3 from 'd3';
// import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import { useState,useEffect, useRef } from 'react';

const width = 640,height = 400;

const MapProjection = () => {
    const mapRef = useRef();
    const [data,setData] = useState();
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const projection = d3.geoMercator()
            .fitSize([width, height], selectedCountry)
            .precision(100);


        const path = d3.geoPath().
            projection(projection)

        const svg = d3.select(mapRef.current).append("svg")
                    .attr("width", width)
                    .attr("height", height)
        const g = svg.append("g")

        d3.json("/Users/niongolo/Documents/projects/JavaScript/react/covid_dataviz_react_d3/src/data/africa_geo.json", function (data) {
           setData(data);
        })

        // g.selectAll("path")
        //         .data(data.features)
        //         .enter()
        //         .append("path")
        //         .attr("d", path)
    }, [])


    return (
        <div ref={mapRef}></div>
    )
}

export default MapProjection;

