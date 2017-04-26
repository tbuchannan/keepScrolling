import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mapStateToProps = (state, ownProps) => {
  return {
    state
  };
};

export default connect(mapStateToProps,{})(SearchBar);
