import reducer from '~/store/ducks/loader';
import { Types } from '~/store/ducks/loader/types';

describe('reducer', () => {
  it('should the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      show: false
    });
  });

  it('should change `show` to `true`', () => {
    expect(
      reducer(undefined, {
        type: Types.SHOW
      })
    ).toEqual({
      show: true
    });
  });

  it('should change `show` to `false`', () => {
    expect(
      reducer(undefined, {
        type: Types.HIDE
      })
    ).toEqual({
      show: false
    });
  });
});
