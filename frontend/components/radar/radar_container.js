import { connect } from 'react-redux';
import Radar from './radar';
import { receiveFollow, createFollow } from '../../actions/follow_actions.js';
import { requestRandomPost } from '../../actions/random_post_actions.js';
import { selectAllPosts, selectRandomPost } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  return {
    randomPost: selectRandomPost(state),
    current_user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveFollow: (follow) => dispatch(receiveFollow(follow)),
    requestRandomPost: (id) => dispatch(requestRandomPost(id)),
    createFollow: (id, follow) => dispatch(createFollow(id, follow))
  };

};
export default connect(mapStateToProps,mapDispatchToProps)(Radar);
