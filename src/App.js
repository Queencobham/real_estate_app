import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

import "./App.css"

class App extends Component {
  
  

  render() {
    return (
      <Router>
        <React.Fragment>
      
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/auth/login" component={LoginPage} />
            </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
