// @flow
//import type { counterStateType } from '../reducers/counter';

type actionType = {
  +type: string,
  +action: string
};

export const LOADURL = 'LOADURL';
export const PLAYPAUSE = 'PLAYPAUSE';
export const STOP = 'STOP';
export const SETVOLUME = 'SETVOLUME';


export function loadURL(url) {
  return {
    type: LOAD_URL,
    action: url
  };
}

export function playPause() {
  return {
    type: PLAYPAUSE
  };
}

export function stop() {
  return {
    type: PLAYPAUSE
  };
}

export function setVolume(volume) {
  return {
    type: PLAYPAUSE,
    action: volume
  };
}
