import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import SimpleBarChart from "./visualizations/reCharts/SimpleBarChart";
import PlotlyLine from "./visualizations/plotly/LineChartPlotly";
import CategoricalAxes from "./visualizations/plotly/CategoricalAxes";
import DatesAxes from "./visualizations/plotly/DatesAxes";
import BarChart from "./visualizations/plotly/BarChart";
import PieChart from "./visualizations/plotly/PieChart";
import GroupedBarChart from "./visualizations/plotly/GroupedBarChart";
import MapBoxCountry from "./visualizations/plotly/MapBoxCountry";
import TimeSeriesRangeSlider from "./visualizations/plotly/TimeSeriesRangeSlider";
// import data from "../data/africa_geo.json";
import MapProjection from './visualizations/MapProjection';
import Card from './tailwind/card';
import Example from './tailwind/tableTailwind';
import WorldVizMap from "./maps/worldMap";
import MapWorldCovid from "./visualizations/amcharts/mapWorld";

export default function Main(){
    return (
        <>
       <Row>
            <div>
                <Card />
            </div>
            <div>
                <Row>
                    <Col>
                        {/* <Spinner  animation="border" role="status"></Spinner> */}
                            <CategoricalAxes />
                    </Col>
                    <Col>
                        {/* <Spinner animation="border" role="status"></Spinner> */}
                        {/* <WorldVizMap /> */}
                        <MapWorldCovid />

                    </Col>
                </Row>

                <Row>
                    <Col>
                        {/* <PlotlyLine /> */}
                        <Spinner  animation="border" role="status"></Spinner>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                        <Example />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <Spinner  animation="border" role="status"></Spinner> */}
                        <div>
                            <DatesAxes />
                        </div>
                    </Col>
                    <Col>
                        {/* <Spinner animation="border" role="status"></Spinner> */}
                            <BarChart />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {/* <Spinner animation="border" role="status"></Spinner> */}
                        <GroupedBarChart />
                    </Col>
                    <Col >
                        {/* <Spinner animation="border" role="status"></Spinner> */}
                        <PieChart />
                    </Col>
                    <Col>
                        <TimeSeriesRangeSlider />
                    </Col>
                </Row>
               
            </div>
            </Row>
        </>
      );
}