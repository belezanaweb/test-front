import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { currencyFormatBr } from './index';

describe('Utils', () => {
  describe('currencyFormatBr', () => {
    it('returns format of brazilian currency', () => {
      const example1 = 50.1;
      const example2 = 5000;
      const example3 = 50000;
      const example4 = 1.1000000003;

      expect(currencyFormatBr(example1)).toBe('50,10');
      expect(currencyFormatBr(example2)).toBe('5.000,00');
      expect(currencyFormatBr(example3)).toBe('50.000,00');
      expect(currencyFormatBr(example4)).toBe('1,10');
    });
  });
});
