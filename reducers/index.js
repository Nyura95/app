// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import name from './name';
import windows from './window';

const rootReducer = combineReducers({
  name,
  windows,
  counter,
  router,
});

export default rootReducer;
