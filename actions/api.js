// @flow
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import type { apiStateType } from '../reducers/api';

type actionType = {
  +type: string,
  +json: string
};

export const GETFOLDER = 'GETFOLDER';
function sendNewJson(json) {
  return {
    type: GETFOLDER,
    json: json
  };
}


export function getFolder() {
  return (dispatch: (action: actionType) => void) => {
    dispatch(showLoading());
    fetch("http://5.196.69.227:3001/login/Nyura/admin95")
      .then(response => response.json())
      .then(json => {
        fetch('http://5.196.69.227:3001/getFolder', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: json.token,
            path: '/',
          })
        })
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            dispatch(hideLoading());
            dispatch(sendNewJson(json));
          }, 2000)
        })
      });
  };
}
