import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Name.scss';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import NavigationLeft from './layout/navigationLeft/'

class Name extends Component {
  props: {
    alexis: () => void,
    romain: () => void,
    name: string,
    path: string
  };

  render() {
    const { alexis, romain, name, path } = this.props;
    return(
      <div data-tid="container">
        <nav>
          <NavigationLeft path={path}/>
        </nav>
        <Grid id={"container"}>
          <Row className="show-grid">
            <Col xs={12} md={12} lg={12} className={"text-center"}>
              Je suis {name} !
            </Col>
            <Col xs={12} md={12} lg={12} className={"text-center"}>
              <Button bsStyle="info" onClick={romain}>Romain</Button>
            </Col>
            <Col xs={12} md={12} lg={12} className={" text-center"}>
              <Button bsStyle="info" onClick={alexis}>Alexis</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Name;
