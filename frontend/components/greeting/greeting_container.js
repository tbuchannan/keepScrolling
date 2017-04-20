import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router';

const mapStateToProps = ( state, ownProps ) => {
  const formType = ownProps.router.location.pathname;
  return {
    currentUser: state.session.currentUser,
    formType: formType
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Greeting));
