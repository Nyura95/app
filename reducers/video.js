// @flow
import { LOADURL, PLAYPAUSE, STOP, SETVOLUME } from '../actions/counter';

export type counterStateType = {
  +url: string
};

type actionType = {
  +type: string,
  +action: string
};

export default function counter(state: json = {try:"lol"}, action: actionType) {
  switch (action.type) {
    case LOADURL:
      return state + 1;
    default:
      return state;
  }
}
