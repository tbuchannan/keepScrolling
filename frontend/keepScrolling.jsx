import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import * as PostUtil from './util/post_api_util';
import configureStore  from './store/store';

window.tj = {user:{username: 'tnice01', password:'password123'}};
window.txtPost = {post: {author_id: 14, title: "Mars", body: "Good old Bruce, the man is a beast.", content_type: "txt"}};
window.createPost = PostUtil.createPost;
window.logout = APIUtil.logout;

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
