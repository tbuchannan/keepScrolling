import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = ( state, ownProps ) => {
  const formType = ownProps.page;
  return {
    currentUser: state.session.currentUser,
    formType: formType
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps,mapDispatchToProps)(Greeting);
