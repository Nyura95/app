// @flow
import { TO_ALEXIS, TO_ROMAIN } from '../actions/name';

export type nameStateType = {
  +name: string
};

type actionType = {
  +type: string
};

export default function counter(state: string = "Alexis", action: actionType) {
  switch (action.type) {
    case TO_ALEXIS:
      return state = "Alexis";
    case TO_ROMAIN:
      return state = "Romain";
    default:
      return state;
  }
}
