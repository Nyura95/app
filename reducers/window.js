// @flow
import { remote } from 'electron';
import { MINIMIZE, RESTORE, CLOSE } from '../actions/window';

export type windowStateType = {
  +window: string
};

type actionType = {
  +type: string
};

export default function counter(state: string = "Null", action: actionType) {
  switch (action.type) {
    case MINIMIZE:
      remote.BrowserWindow.getFocusedWindow().minimize();
      return state = "Minimize";
    case CLOSE:
      remote.BrowserWindow.getFocusedWindow().close();
      return state = "Close";
    case RESTORE:
      if(remote.BrowserWindow.getFocusedWindow().isMaximized()) {
        remote.BrowserWindow.getFocusedWindow().restore();
      } else {
        remote.BrowserWindow.getFocusedWindow().maximize();
      }
      return state = "reSize";
    default:
      return state;
  }
}
