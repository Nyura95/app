// @flow

import React, { Component } from 'react';
import styles from './Home.scss';

import NavigationLeft from './layout/navigationLeft/';
import NavigationTop from './layout/NavigationTop/';

import { Grid, Row, Col, Button } from 'react-bootstrap';
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
        loaded: state.loaded
      })
    }
    // We only want to update time slider if we are not currently seekin
  }
  render() {
    const { loadURL, setVolume, path, video } = this.props;
    const { loaded } = this.state;
    return (
      <div data-tid="container">
        <NavigationLeft path={path}/>
        <NavigationTop />
        <div className={styles.marginLeft+' container-fluid'}>
          <ReactPlayer
            ref={player => { this.player = player }}
            className='react-player'
            url={video.url}
            volume={video.volume}
            controls={false} //Permet d'avoir le control natif
            onProgress={this.onProgress}
          />
          <Button onClick={() => loadURL("https://www.youtube.com/watch?v=jb1-3DvtrmE")}>Video</Button>
          <Button onClick={() => setVolume(video.volume + 0.1)}>up</Button>
          <Button onClick={() => setVolume(video.volume - 0.1)}>down</Button>
          <progress max={1} value={loaded} />
        </div>
      </div>
    );
  }
}
