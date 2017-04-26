import React from 'react';
import { Link } from 'react-router';
import RightNavBarContainer from './nav_bar/right_nav_bar_container';
import SearchBarContainer from './search_bar/search_bar_container';


const App = ({ children }) => (
    <div>
      <div className="parent-div">
        <header className="header-signup-unmounted">
          <div className="logo-search">
            <Link to="/" className="header-link">
              kS.
            </Link>
            <SearchBarContainer />
          </div>
          <RightNavBarContainer />
        </header>
      </div>
      { children }
    </div>
  );

export default App;
