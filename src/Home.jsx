import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
import Main from './components/Main';
import {Header} from './components/Header';



const Home = () => {
    return (
        <div className="bg-black">
            <NavBar/>
            <Container fluid>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <Header />
                    </div>
                    <div className="col-12 col-lg-9">
                        <Main />
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Home;