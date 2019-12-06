import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import User from "../User/User";
import Alert from "../Alert/Alert";
import GithubState from "../../context/github/GithubState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
