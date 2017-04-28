import { connect } from 'react-redux';
import Recommended from './recommended';
import { receiveFollow, requestAllFollowees } from '../../actions/follow_actions.js';
import { selectAllFollowees } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  // debugger
  // current_user: state.session.currentUser};
  return {
    followees: selectAllFollowees(state),
};

const mapDispatchToProps = (dispatch) => {
  return{
    receiveFollow: (follow) => dispatch(receiveFollow(follow)),
    requestAllFollowees: (id) => dispatch(requestAllFollowees(id))
  };

};
// export default connect(mapStateToProps,mapDispatchToProps)(Recommended);
