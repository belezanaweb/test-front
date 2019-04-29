import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Card from './index';
import { Title } from './styles';

describe('Card', () => {
  describe('when title is provided', () => {
    it('shows title', () => {
      const Button = (<button>test</button>);
      const wrapper = shallow(<Card title="Test for BLZ"><Button /></Card>);

      expect(wrapper.find(Title).text()).toBe('Test for BLZ');
    });
  });

  describe('when title is not provided', () => {
    it('dont shows title', () => {
      const Button = (<button>test</button>);
      const wrapper = shallow(<Card><Button /></Card>);

      expect(wrapper.find(Title).length).toEqual(0);
    });
  });

  describe('when children is provided', () => {
    it('shows children', () => {
      const Button = (<button>test</button>);
      const wrapper = shallow(<Card><Button /></Card>);

      expect(wrapper.find(Button)).toBeTruthy();
    });
  });
});
