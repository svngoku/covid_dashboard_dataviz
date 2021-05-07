import React, { useState, useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import axios from 'axios';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 150, pv: 2400, amt: 2400}];
const url = `http://localhost:8000/afrique_central`;

const RenderLineChart = () =>  {
  const [datas, setDatas] = useState(data)
  const getData = async () => {
    let res = await axios.get(url);
    let result = res.data.datas;
    result.map((d) => {
      setDatas(d)
    })
  }
  useEffect(() => {
    getData();
  }, [])
    return (
        <LineChart width={600} height={300} data={datas}>
          <Line type="monotone" dataKey="Nombre de cas detectes" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="Pays" />
          <YAxis />
        </LineChart>
      );
}

export default RenderLineChart;