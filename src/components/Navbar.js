import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Icon from "./logo";
export default function NavBar(){
    return (
        <div className="pb-8">
           <Navbar className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <Navbar.Brand href="/" className="navbar-brand col-sm-3 col-md-2 mr-0">
              <img height="150" width="150" src="../logo_covid.png" className="center" />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <p className="text-3xl font-bold leading-10 text-white" style={{width: "auto", height: "auto",}}>Covid-19 Global Cases Dashboard</p>
            </Nav>
          </Navbar>
        </div>
      );
}