// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  render() {
    const { loadURL, setVolume, path, video } = this.props;
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
          />
          <Button onClick={() => loadURL("https://www.youtube.com/watch?v=jb1-3DvtrmE")}>Video</Button>
          <Button onClick={() => setVolume(video.volume + 0.1)}>up</Button>
          <Button onClick={() => setVolume(video.volume - 0.1)}>down</Button>
        </div>
      </div>
    );
  }
}

/*

*/
