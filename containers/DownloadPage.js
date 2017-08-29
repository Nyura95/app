// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Download from '../components/Download';
import * as apiActions from '../actions/api';

function mapStateToProps(state, ownProps) {
  return {
    api: state.api,
    path:ownProps.location.pathname
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(apiActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Download);
