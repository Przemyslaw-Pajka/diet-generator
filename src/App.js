import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Cockpit from "./components/Cockpit/Cockpit";
import { MealStatesProvider } from "./store/MealStates";
import createHistory from "history/createBrowserHistory";

const history = createHistory({
  basename: process.env.PUBLIC_URL,
});
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MealStatesProvider>
        <Router history={history} basename={process.env.PUBLIC_URL}>
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
