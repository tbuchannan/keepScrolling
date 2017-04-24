import { connect } from 'react-redux';
import PostBar from './post_bar';

const mapStateToProps = (state, ownProps) => {
  return {
    state
  };
};

export default connect(mapStateToProps, {})(PostBar);
