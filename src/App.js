import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Campaigns from "./components/Campaigns";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Employee from "./components/Employees";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/campaigns">
          <Campaigns />
        </Route>
        <Route path="/employees">
          <Employee />
        </Route>
        <Route path="/">
          <Campaigns />
        </Route>
      </Switch>
    </Router>
  );
};

function App({ campaigns }) {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

const mapStateToProps = (state) => ({
  campaigns: state,
});

export default connect(mapStateToProps)(App);
