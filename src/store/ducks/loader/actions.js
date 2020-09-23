import { Types } from './types';

export function show() {
  return {
    type: Types.SHOW
  };
}

export function hide() {
  return {
    type: Types.HIDE
  };
}
