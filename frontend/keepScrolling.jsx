import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import configureStore  from './store/store';


window.tj = {user:{username: 'tnice01', password:'password123'}};
// window.login = APIUtil.login;
// window.logout = APIUtil.logout;
// window.signup = APIUtil.signup;
// window.store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);

});
