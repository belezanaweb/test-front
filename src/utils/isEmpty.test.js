/* eslint-disable no-undef */
import {
  isEmptyObj,
  isEmptyArray,
} from './isEmpty';

describe('"Check is Empty" function', () => {

  test('Test objects and arrays', () => {

    expect(isEmptyObj({ a: 2 })).toBe(false);
    expect(isEmptyObj({})).toBe(true);
    expect(isEmptyObj()).toBe(true);
    expect(isEmptyObj('a')).toBe(true);
    expect(isEmptyObj(1)).toBe(true);

    expect(isEmptyArray(['a', 2])).toBe(false);
    expect(isEmptyArray([])).toBe(true);
    expect(isEmptyArray()).toBe(true);
    expect(isEmptyArray('a')).toBe(true);
    expect(isEmptyArray(1)).toBe(true);

  });

});
