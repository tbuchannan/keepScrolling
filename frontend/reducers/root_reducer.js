import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PostReducer from './post_reducer';
import FollowReducer from './follow_reducer';
import RandomPostReducer from './random_post_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostReducer,
  potentials: FollowReducer,
  randomPost: RandomPostReducer
});

export default rootReducer;
