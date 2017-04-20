import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
    <div>
      <header className="header-signup">
        <Link to="/" className="header-link">
          kS.
        </Link>
        <GreetingContainer page={children.props.route.path}/>
      </header>
      { children }
    </div>
  )

export default App;
