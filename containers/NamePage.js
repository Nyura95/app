import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Name from '../components/Name';
import * as CounterActions from '../actions/name';

function mapStateToProps(state, ownProps) {
  return {
    name: state.name,
    path: ownProps.location.pathname
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Name);
