import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

import { Row, Col, ListGroup } from 'react-bootstrap';

const  Header = () => {
    const [dataCountries, setDataCountries] = useState([])

    async function getCountries() {
        let countriesData = await fetch("https://api.covid19api.com/summary").then(response => response.json())
        countriesData = countriesData.Countries.sort((a, b) => a.TotalConfirmed < b.TotalConfirmed);
        setDataCountries(countriesData)
    }

    const selectedCountrie = (e) => {
        console.log(e.currentTarget)
    }

    useEffect(() => {
        getCountries();
    }, [])
      

    return (
        <>
            <Row>
                <ListGroup variant='flush'>
                    <br />
                    <div className="relative md:fixed w-full md:w-1/4 min-h-screen inset-0 overflow-y-auto">
                        {
                            dataCountries.map((data) => {
                                return (
                                    <ListGroup.Item onClick={(e) => selectedCountrie(e)} className="bg-black h-auto">
                                        <div className="w-auto h-auto">
                                            <div className="flex items-center h-auto py-1 px-1 space-x-2">
                                                    <p className="w-1/ text-2xl font-bold leading-1 text-red-600">{data.Country}</p>
                                                    <p className="w-1/3 text-2xl font-bold text-white leading-1">{data.TotalConfirmed.toLocaleString()}</p>

                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </div>
                </ListGroup>
            </Row>
        </>
    );
}


export {
    Header
}

