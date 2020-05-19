import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./styles.css";

import Home from "./Components/Home";
import Friends from "./Components/Friends";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <li className="nav-buttons">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-buttons">
            <Link to="/friends">Friends</Link>
          </li>
        </nav>
        <h1>Friends App</h1>
        <h2>SPA Client Side Routing</h2>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/friends" component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}
