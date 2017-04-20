import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';

import App from './app';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ SessionFormContainer } />
          <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>

    </Provider>
  );
};

export default Root;
