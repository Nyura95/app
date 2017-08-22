// @flow
import React, { Component } from 'react';
import Home from '../components/Home';

export default class HomePage extends Component {
  props: {
    path:void
  };

  render() {
    return (
      <Home path={this.props.location.pathname} />
    );
  }
}
