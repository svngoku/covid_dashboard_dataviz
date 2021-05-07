import React, { useState , useEffect} from "react"
import { WorldMap } from "react-svg-worldmap";
import { Spinner } from 'react-bootstrap';



const  WorldVizMap = () => {
    const [ data, setData] = useState([])

    async function getCovidData() {
        const totalWorld = await fetch("https://api.covid19api.com/summary").then(
          response => response.json()
        );
        const worldData = []
        for (let countrie of totalWorld.Countries) {
            worldData.push({
                country: countrie.CountryCode,
                value: countrie.TotalConfirmed
            })
        }

        setData(worldData)
    }

      useEffect(() => {
        getCovidData();
      }, [])


    return (
        <div className="map d-flex justify-content-center text-center">
            {
                (data.length !== 0) ? (
                    <WorldMap color="red" title="Number of confirmed cases by countries " type="marker" borderColor="white" tooltipTextColor="white" tooltipBgColor="black" backgroundColor="black" value-suffix="Countries" size="lg" frame="true" data={data} />
                ) : (
                    <Spinner  animation="border" role="status"></Spinner>
                )
                
            }
        </div>
      )
}


export default WorldVizMap;
