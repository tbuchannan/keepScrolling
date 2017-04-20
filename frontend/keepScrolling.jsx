import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import configureStore  from './store/store';


window.tj = {user:{username: 'tnice01', password:'password123'}};
// window.login = APIUtil.login;
window.logout = APIUtil.logout;
// window.signup = APIUtil.signup;
// window.store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    window.store = store;
  // const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});
