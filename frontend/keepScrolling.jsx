import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import * as PostUtil from './util/post_api_util';
import configureStore  from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
    if (window.current_user) {
      const preloadedState = { session: { currentUser: window.current_user, errors: [] } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
