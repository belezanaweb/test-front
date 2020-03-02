// Action Types

export const Types = {
  SHOW: 'load/SHOW',
  HIDE: 'load/HIDE'
};

const initialState = {
  show: false
};

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        show: true
      };

    case Types.HIDE:
      return {
        show: false
      };

    default:
      return state;
  }
}

// Action Creators

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
