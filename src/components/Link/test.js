import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

import Link from './index';
import { ButtonLink } from './styles';

const renderLink = (actionLink) => {
  const wrapper = shallow(
    <Link
      text="Test for BLZ"
      actionLink={actionLink ? actionLink : () => {}}
    />
  );
  return wrapper;
}

describe('Link', () => {
  it('shows button', () => {
    const wrapper = renderLink();

    expect(wrapper.find(ButtonLink).length).toBe(1);
  });

  it('shows text button', () => {
    const wrapper = renderLink();

    expect(wrapper.find(ButtonLink).text()).toBe('Test for BLZ');
  });

  describe('calls on click', () => {
    it('calls toggle ', () => {
      const spyClick = sinon.spy();
      const wrapper = renderLink(spyClick);

      wrapper.find(ButtonLink).simulate('click');

      expect(spyClick.calledOnce).toBe(true);
    });
  });
});
