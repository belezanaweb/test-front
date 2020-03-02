import reducer, { show, hide, Types } from '../loader';

describe('loader', () => {
  describe('actions', () => {
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
});
