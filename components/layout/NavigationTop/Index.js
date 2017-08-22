import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import styles from './Index.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../../actions/window';


class NavigationTop extends Component {
  props: {
    minimize: () => void,
    close: () => void,
    restore: () => void
  };
  render() {
    const { minimize, close, restore } = this.props;
    return (
      <div className={"container-fluid "+styles.containerHeader}>
        <Col className={styles.draggable} lg={12} md={12} xs={12} >
        </Col>
        <Col className={styles.container+" text-center"} lg={12} md={12} xs={12} >
          <b>Macopharma</b>
          <div className={styles.close+" fa fa-window-minimize"} style={{right:85}} onClick={minimize}></div>
          <div className={styles.close+" fa fa-window-restore"} style={{right:47}} onClick={restore}></div>
          <div className={styles.close+" fa fa-times"} style={{right:20}} onClick={close}></div>
        </Col>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(null, mapDispatchToProps)(NavigationTop);
