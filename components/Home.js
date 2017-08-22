// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.scss';
import NavigationLeft from './layout/navigationLeft/';
import NavigationTop from './layout/NavigationTop/';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default class Home extends Component {
  props: {
    path: string
  };
  render() {
    const { path } = this.props;
    return (
      <div data-tid="container">
        <nav>
          <NavigationLeft path={path}/>
        </nav>
        <header>
          <NavigationTop />
        </header>
        <Grid fluid className={"text-center"} id={"container"}>
          <Row className={"show-grid"}>
            <Col xs={12} md={12} lg={12} className={styles.margin}>
              <Button bsStyle="info">Trouver le fichier CSV des contrats</Button>
            </Col>
          </Row>
          <Row className={"show-grid "+styles.margin}>
            <Col xs={12} md={12} lg={12}>
              <Button bsStyle="success" className={styles.marginLeft}>Fichier trouvé</Button>
              <Button bsStyle="warning">Fichier non trouvé</Button>
            </Col>
          </Row>
          <Row className={"show-grid "+styles.margin}>
            <Col xs={12} md={12} lg={12}>
              <Button bsStyle="danger">Lancer la procédure dinclusion</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
