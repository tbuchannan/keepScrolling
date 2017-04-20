import React from 'react';
import { Link } from 'react-router';

const sessionLinks = (formType) => {
  if (formType === "/signup"){
    return (
      <nav className="login-signup">
        <button >
          <Link to="/login" activeClassName="current">Login</Link>
        </button>
      </nav>
    );
  } else {
      return (<nav className="login-signup">
        <button >
          <Link to="/signup"  activeClassName="current">Sign Up!</Link>
        </button>
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
