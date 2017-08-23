// @flow
import type { videoStateType } from '../reducers/video';

type actionType = {
  +type: string,
  +type: string | number
};

export const LOADURL = 'LOADURL';
export const PLAYPAUSE = 'PLAYPAUSE';
export const STOP = 'STOP';
export const SETVOLUME = 'SETVOLUME';


export function loadURL(url) {
  return {
    type: LOADURL,
    action: url
  };
}

export function playPause() {
  return {
    type: PLAYPAUSE,
    action: ""
  };
}

export function stop() {
  return {
    type: PLAYPAUSE,
    action: ""
  };
}

export function setVolume(volume) {
  return {
    type: SETVOLUME,
    action: volume
  };
}
