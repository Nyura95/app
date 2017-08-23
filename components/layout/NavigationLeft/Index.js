import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Index.scss';
import Page from './Page';

export default class NavigationLeft extends Component {
  props: {
    path: string
  };

  render() {
    const { path } = this.props;
    return(
        <nav className={styles.container}>
          <Page active={path} />
        </nav>
    );
  }
}
