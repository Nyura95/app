/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import NamePage from './containers/NamePage';
import ChatPage from './containers/ChatPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/name" component={NamePage} />
      <Route path="/chat" component={ChatPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
