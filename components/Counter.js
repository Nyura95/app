// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.scss';
import NavigationLeft from './layout/navigationLeft/';
import { Col, Grid, Row } from 'react-bootstrap';

class Counter extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number,
    path: string
  };

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, path } = this.props;
    return (
      <div data-tid="container">
        <nav>
          <NavigationLeft path={path}/>
        </nav>
        <Grid id={"container"}>
          <Row className="show-grid">
            <Col className={`counter ${styles.counter}`} data-tid="counter">
              {counter}
            </Col>
            <Col className={styles.btnGroup}>
              <button className={styles.btn} onClick={increment} data-tclass="btn">
                <i className="fa fa-plus" />
              </button>
              <button className={styles.btn} onClick={decrement} data-tclass="btn">
                <i className="fa fa-minus" />
              </button>
              <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn">odd</button>
              <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn">async</button>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default Counter;
