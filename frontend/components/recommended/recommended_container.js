import { connect } from 'react-redux';
import Recommended from './recommended';
import { receiveFollow, requestAllFollowees, requestPotentialFollowees, createFollow } from '../../actions/follow_actions.js';
import { selectAllPotentials } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  return {
    potentials: selectAllPotentials(state),
    current_user: state.session.currentUser};
};

const mapDispatchToProps = (dispatch) => {
  return{
    receiveFollow: (follow) => dispatch(receiveFollow(follow)),
    requestAllFollowees: (id) => dispatch(requestAllFollowees(id)),
    requestPotentialFollowees: (id) => dispatch(requestPotentialFollowees(id)),
    createFollow: (id, follow) => dispatch(createFollow(id, follow))
  };

};
export default connect(mapStateToProps,mapDispatchToProps)(Recommended);
