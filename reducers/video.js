// @flow
import { LOADURL, PLAYPAUSE, STOP, SETVOLUME } from '../actions/video';

export type videoStateType = {
  +url: string,
  +playing: boolean,
  +volume: number,
  +played: number,
  +loaded: number,
  +duration: number,
  +playbackRate: number
};

type actionType = {
  +type: string,
  +type: string | number
};

export default function video(state: videoStateType = {url:"", playing:true, volume: 0.8, played: 0, loaded: 0, duration: 0, playbackRate: 1.0}, action: actionType) {
  switch (action.type) {
    case LOADURL:
      return state = {url:action.action, playing:state.playing, volume: state.volume, played: state.played, loaded: state.loaded, duration: state.duration, playbackRate: state.playbackRate}
    case SETVOLUME:
    return state = {url:state.url, playing:state.playing, volume: action.action, played: state.played, loaded: state.loaded, duration: state.duration, playbackRate: state.playbackRate}
    default:
      return state;
  }
}
