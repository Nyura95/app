// @flow
import { combineReducers, applyMiddleware } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import counter from './counter';
import name from './name';
import windows from './window';
import video from './video';
import api from './api';

const rootReducer = combineReducers({
  name,
  windows,
  counter,
  router,
  video,
  api,
  loadingBar:loadingBarReducer
});

export default rootReducer;
