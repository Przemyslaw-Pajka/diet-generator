import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Cockpit from "./components/Cockpit/Cockpit";
import { MealStatesProvider } from "./store/MealStates";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MealStatesProvider>
        <Router>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Header />
          <Cockpit />
        </Router>
      </MealStatesProvider>
    );
  }
}

export default App;
