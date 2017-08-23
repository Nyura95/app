// @flow
import { combineReducers, applyMiddleware } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import counter from './counter';
import name from './name';
import windows from './window';
import video from './video';

const rootReducer = combineReducers({
  name,
  windows,
  counter,
  router,
  video,
  loadingBar:loadingBarReducer
});

export default rootReducer;
