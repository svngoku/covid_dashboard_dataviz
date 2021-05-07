import React, { useEffect, useState, useRef} from "react";
import * as d3 from "d3" ;

const width = 650;
const height = 400;
const SandBox = () => {
    const canvas = useRef(null);

    useEffect(() => {
        showCanvas();
    }, [])

    const showCanvas = () => {
        
        const svg = d3.select(canvas.current)
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin")
            .style("background-color", "grey")
    }

    return (
        <div>
            <div className="sandbox">
                {/* <div className="canvas" ref={canvas}></div> */}
                <svg width={width} height={height}></svg>
            </div>
        </div>
    )
}

export default SandBox;