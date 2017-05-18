import { connect } from 'react-redux';
import Recommended from './recommended';
import { receiveFollow, requestAllFollowees, requestPotentialFollowees } from '../../actions/follow_actions.js';
import { selectAllFollowees } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    followees: selectAllFollowees(state),
    current_user: state.session.currentUser};
};

const mapDispatchToProps = (dispatch) => {
  return{
    receiveFollow: (follow) => dispatch(receiveFollow(follow)),
    requestAllFollowees: (id) => dispatch(requestAllFollowees(id)),
    requestPotentialFollowees: (id) => dispatch(requestPotentialFollowees(id))
  };

};
export default connect(mapStateToProps,mapDispatchToProps)(Recommended);
