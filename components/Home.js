// @flow

import React, { Component } from 'react';
import styles from './Home.scss';

import NavigationLeft from './layout/navigationLeft/';
import NavigationTop from './layout/NavigationTop/';

import { Grid, Row, Col, Button, FormControl } from 'react-bootstrap';
import type { videoStateType } from '../reducers/video';
import ReactPlayer from 'react-player'

export default class Home extends Component {
  props: {
    loadURL: () => void,
    setVolume: () => void,
    video: videoStateType,
    path: string
  };

  constructor(props) {
    super(props);
    this.state = {
      loaded:0
    }
  }

  onProgress = state => {
    if(state.loaded) {
      this.setState({
        loaded: state.loaded,
        url: ""
      })
    }
    // We only want to update time slider if we are not currently seekin
  }

  render() {
    const { loadURL, setVolume, path, video } = this.props;
    const { loaded, url } = this.state;
    return (
      <div data-tid="container">
        <NavigationLeft path={path}/>
        <NavigationTop />
        <div id={"container"} className={'container-fluid'}>
          <ReactPlayer
            ref={player => { this.player = player }}
            className='react-player'
            url={video.url}
            volume={video.volume}
            onProgress={this.onProgress}
            controls={false} //Permet d'avoir le control natif
          />
          <Row>
            <Col lg={12} md={12} xs={12}>
            <FormControl
              type="text"
              placeholder="Entre une URL (Video interne en cours de développement)"
              onChange={e => this.setState({url:e.target.value})}
            />
              <Button onClick={() => loadURL(this.state.url)}>Load la vidéo</Button>
              <Button onClick={() => setVolume(video.volume + 0.1)}>up</Button>
              <Button onClick={() => setVolume(video.volume - 0.1)}>down</Button>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} xs={12}>
              Loading de la vidéo : <progress max={1} value={loaded} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
