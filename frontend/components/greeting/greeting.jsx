import React from 'react';
import { Link } from 'react-router';

const sessionLinks = (formType) => {
  if (formType === "/signup"){
    return (
      <nav className="login-signup">
        <Link to="/login" activeClassName="current">Login</Link>
      </nav>
    );
  } else {
      return (
        <nav className="login-signup">
          <Link to="/signup"  activeClassName="current">Sign Up!</Link>
        </nav>);
    }
  };

const personalGreeting = (currentUser, logout) => (
  <hgroup>
    <h1>{currentUser.username} is here</h1>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout, formType }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(formType)
);

export default Greeting;
