import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign Up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup>
    <h1>{currentUser.username} is here</h1>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
