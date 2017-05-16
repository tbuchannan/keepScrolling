import React from 'react';
import { Link, hashHistory} from 'react-router';

const sessionLinks = (formType, guestLogin) => {
  const guest = (e) => {
    let user;
    user = {email: "guest@guest.com", password: "guest1234"};
    guestLogin({user});
  };

  if (formType === "/signup"){
    return (
      <nav className="login-signup">
        <Link to="/login" activeClassName="current">
          <span className="login-button-text">Login</span>
        </Link>
      <button onClick={guest} className="guest-login">
        Guest Login
      </button>
    </nav>
    );
  } else {
      return (
        <nav className="login-signup">
          <Link to="/signup"  activeClassName="current">
            <span className="login-button-text">Sign Up!</span>
          </Link>

          <button onClick={guest} className="guest-login">
            Guest Login
          </button>
        </nav>);
    }
  };

const personalNavBar = (currentUser, logout) => (
  <div className="logout-button-container">
    <button className="logout-button" onClick={logout}>Log Out</button>
  </div>
);

const RightNavBar = ({ currentUser, logout, formType, guestLogin }) => (
  currentUser ? personalNavBar(currentUser, logout) : sessionLinks(formType, guestLogin)
);

export default RightNavBar;
