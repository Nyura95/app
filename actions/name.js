// @flow
//import type { counterStateType } from '../reducers/counter';

type actionType = {
  +type: string
};

export const TO_ALEXIS = 'TO_ALEXIS';
export const TO_ROMAIN = 'TO_ROMAIN';

export function alexis() {
  return {
    type: TO_ALEXIS
  };
}

export function romain() {
  return {
    type: TO_ROMAIN
  };
}
