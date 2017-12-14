import { connect } from 'react-redux';
import Recommended from './recommended';
import { receiveFollow, requestAllFollowees, requestPotentialFollowees, createFollow } from '../../actions/follow_actions.js';
import { selectAllPotentials, selectAllFollowees } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  return {
    potentials: selectAllPotentials(state),
    currentUser: state.session.currentUser,
    followees: selectAllFollowees(state)
  };
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
