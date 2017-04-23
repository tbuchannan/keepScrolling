import React from 'react';
import { Link } from 'react-router';

const sessionLinks = (formType, guestLogin) => {
  const guest = (e) => {
    let user;
    user = {email: "tj.buchannan@gmail.com", password: "password123"};
    guestLogin({user});
  };

  if (formType === "/signup"){
    return (
      <nav className="login-signup">
        <Link to="/login" activeClassName="current">Login</Link>
      <button onClick={guest} className="guest-login">
        Guest Login
      </button>
    </nav>
    );
  } else {
      return (
        <nav className="login-signup">
          <Link to="/signup"  activeClassName="current">Sign Up!</Link>
          <button onClick={guest} className="guest-login">
            Guest Login
          </button>
        </nav>);
    }
  };

const personalNavBar = (currentUser, logout) => (
  <hgroup>
    <h1>{currentUser.username} is here</h1>
    <button className="logout-button" onClick={logout}>Log Out</button>
  </hgroup>
);

const RightNavBar = ({ currentUser, logout, formType, guestLogin }) => (
  currentUser ? personalNavBar(currentUser, logout) : sessionLinks(formType, guestLogin)
);

export default RightNavBar;
