// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as VideoActions from '../actions/video';

function mapStateToProps(state, ownProps) {
  return {
    video: state.video,
    path:ownProps.location.pathname
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(VideoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
