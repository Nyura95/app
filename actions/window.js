// @flow

export const RESTORE = 'RESTORE';
export const MINIMIZE = 'MINIMIZE';
export const CLOSE = 'CLOSE';

export function minimize() {
  return {
    type: MINIMIZE
  };
}

export function restore() {
  return {
    type: RESTORE
  };
}

export function close() {
  return {
    type: CLOSE
  };
}
