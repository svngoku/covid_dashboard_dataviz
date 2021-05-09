import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import  Home from "./Home";


function App() {

  return (
    <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/france"  exact />
        </Switch>
    </Router>
  )
}
export default App;
