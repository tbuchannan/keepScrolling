import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PostReducer from './post_reducer';
// import FollowReducer from './follow_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  posts: PostReducer
});

export default rootReducer;

// followees: FollowReducer
