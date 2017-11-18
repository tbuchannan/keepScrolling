import { connect } from 'react-redux';
import Radar from './radar';
import { receiveFollow, createFollow } from '../../actions/follow_actions.js';
import { requestAllFollowees } from '../../actions/followee_actions.js';
import { requestRandomPost } from '../../actions/random_post_actions.js';
import { selectAllPosts, selectRandomPost, selectAllFollowees } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  return {
    randomPost: selectRandomPost(state),
    current_user: state.session.currentUser,
    folowees: selectAllFollowees(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveFollow: (follow) => dispatch(receiveFollow(follow)),
    requestRandomPost: (id) => dispatch(requestRandomPost(id)),
    requestAllFollowees: (id) => dispatch(requestAllFollowees(id)),
    createFollow: (id, follow) => dispatch(createFollow(id, follow)),
  };

};
export default connect(mapStateToProps,mapDispatchToProps)(Radar);