import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';
import * as PostUtil from './util/post_api_util';
import configureStore  from './store/store';
// text = Post.create
// photo = Post.create(author_id: User.last.id, title: "", body: "Should I add a description?", photo_url: "www.external_photo_link.com", content_type: "jpg")
// quote = Post.create(author_id: User.second.id, title: "source information here?", body: "quote text will go in here", content_type: "txt", source: "source users")
// link = Post.create(author_id: User.third.id, title: "this will be on the link itself", body: "this is just a description", content_type: "", summary: "this is just a summary")
// chat = Post.create(author_id: User.fourth.id, title: "title of the chat", body: "chat text", content_type: "txt")
// audio = Post.create(author_id: User.fifth.id, title: "", body: " song description, def not a youtube link AUDIO ONLY", content_type: "mp3")
// video = Post.create(author_id: User.first.id, title: "", body: "Good old Bruce, the man is a beast.", content_type: "mp4")

window.tj = {user:{username: 'tnice01', password:'password123'}};
window.txtPost = {post: {author_id: 14, title: "Mars", body: "Good old Bruce, the man is a beast.", content_type: "txt"}};
window.createPost = PostUtil.createPost;
window.logout = APIUtil.logout;

document.addEventListener("DOMContentLoaded", () => {
  let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

});
