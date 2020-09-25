import { show, hide } from '~/store/ducks/loader/actions';
import { Types } from '~/store/ducks/loader/types';

describe('Loader Actions', () => {
  it('should create an action to show loader', () => {
    expect(show()).toEqual({
      type: Types.SHOW
    });
  });

  it('should create an action to hide loader', () => {
    expect(hide()).toEqual({
      type: Types.HIDE
    });
  });
});
