import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./styles.css";

import Home from "./Components/Home";
import Friends from "./Components/FriendsList";
import Friend from "./Components/Friend";
import FriendsData from "./Components/FriendsData";

export default function App() {
  const [friends, setFriend] = useState(FriendsData);
  console.log("App says friend is ", friends);
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
          <Route exact path="/friends" component={Friends} />
          <Route path="/friends/:id" component={Friend} />
        </Switch>
      </div>
    </Router>
  );
}
