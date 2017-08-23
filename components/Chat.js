// @flow
import React, { Component } from 'react';
import styles from './Chat.scss';

import NavigationLeft from './layout/navigationLeft/';
import NavigationTop from './layout/NavigationTop/';

class Chat extends Component {
  render() {
    const { path } = this.props;
    return (
      <div data-tid="container">
        <NavigationLeft path={path}/>
        <NavigationTop />
      </div>
    );
  }
}

export default Chat;
