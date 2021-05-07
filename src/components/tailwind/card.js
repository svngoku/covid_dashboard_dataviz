import React, { useEffect , useState } from "react";

export default function Card() {
  const [records, setRecords] = useState([]);

  async function getCovidData() {
    const totalWorld = await fetch("https://api.covid19api.com/summary").then(
      response => response.json()
    );
    let { Global } = totalWorld
    setRecords([
        {
          title: "Global Cases",
          value: Global.TotalConfirmed.toLocaleString(),
          color: "red",
          percent: "100"
        },
        {
          title: "New Confirmed",
          value: Global.NewConfirmed.toLocaleString(),
          color: "red",
          percent: "100"
        },
        {
          title: "Global Recovered",
          value: Global.TotalRecovered.toLocaleString(),
          color: "green",
          percent: "100"
        },

        {
          title: "New Recovered",
          value: Global.NewRecovered.toLocaleString(),
          color: "green",
          percent: "100"
        },
        {
          title: "Global Deaths",
          value: Global.TotalDeaths.toLocaleString(),
          color: "red",
          percent: "100"
        },
        {
          title: "New Deaths",
          value: Global.NewDeaths.toLocaleString(),
          color: "red",
          percent: "100"
        }
    ])
  }
  useEffect(() => {
    getCovidData();
  }, [])
    return (
        <div className="">
          <div className="flex space-x-2 overflow-auto">
          {
            records.map((record) => {
              return (
               record.color === "green" ? (
                <div className="w-auto h-auto" >
                      <div className="inline-flex flex-col space-y-96  items-center justify-center w-96">
                        <div className="flex flex-col space-y-3 items-start  justify-end w-full flex-1 pl-7 pr-10 pt-2.5 pb-6 bg-gray-900 rounded-2xl">
                            <p className="w-3/4 h-1/6 text-2xl font-bold leading-9 text-white">{record.title}</p>
                            <p className={"w-full h-16 text-5xl font-bold leading-10 text-"+record.color+"-400"}>{record.value}</p>
                            <div className="flex justify-center space-x-1">
                              <img src="../fi-br-arrow-small-down-green.svg"/>
                              <p className={"w-10 h-1/6 text-sm font-bold leading-snug text-"+record.color+"-400"}>{record.percent}%</p>
                            </div>
                        </div>
                      </div>
                </div>

               ) : (
                <div className="w-96 h-60">
                <div className="inline-flex flex-col space-y-96 items-center justify-center w-96">
                  <div className="flex flex-col space-y-3 items-start justify-end w-full flex-1 pl-7 pr-12 pt-2.5 pb-6 bg-gray-900 rounded-2xl">
                      <p className="w-3/4 h-1/6 text-2xl font-bold leading-9 text-white">{record.title}</p>
                      <p className={"w-full h-16 text-5xl font-bold leading-10 text-"+record.color+"-400"}>{record.value}</p>
                      <div className="flex justify-center space-x-1">
                        <img src="../fi-br-arrow-small-down.svg"/>
                        <p className={"w-10 h-1/6 text-sm font-bold leading-snug text-"+record.color+"-400"}>{record.percent}%</p>
                      </div>
                  </div>
                </div>
          </div>
               )
              )
            })
          }
            </div>
          </div>
      );
}
