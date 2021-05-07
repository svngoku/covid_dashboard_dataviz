import React, {useState, useEffect} from 'react';
import Plot from "react-plotly.js"


const CategoricalAxes = () => {
    const [datas, setDatas] = useState([])
    async function getCovidData() {
        const totalWorld = await fetch("https://api.covid19api.com/summary").then(
          response => response.json()
        );
        let { Countries } = totalWorld;
        let countriesName = Countries.map((c) => c.Country)
        let countriesDeaths = Countries.map((c) => c.TotalDeaths)
        setDatas([
            {
                x: countriesName,
                y: countriesDeaths,
                mode: 'markers',
                type: 'bar',
                text: countriesName,
            }            
        ])
      }
      useEffect(() => {
        getCovidData();
      }, [])
    return (
        <Plot 
            data={datas}
            layout={{
                xaxis: {
                    type: 'category',
                    title: 'Countries',
                  },
                  yaxis: {
                    title: 'Number of Deaths'
                  },
                    title: "Number of Deaths by Countries"
            }}
        />
    );
} 


export default CategoricalAxes;