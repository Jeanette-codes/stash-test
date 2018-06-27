import React from 'react';
import { mount } from 'enzyme';
import { Search } from './index';

it('should render self and subcomponents', () => {
  const wrapper = mount(<Search />);
  expect(wrapper.find('input')).toExist();
  expect(wrapper.find('i')).toExist();
});

it('should handle input change events', () => {
  const props = {
    dispatch: jest.fn()
  };
  const wrapper = mount(<Search {...props} />);
  const input = wrapper.find('input');
  input.simulate('change', { target: { value: 'test' } });
  expect(props.dispatch.mock.calls[0][0]).toEqual({
    type: 'CHANGE_SEARCH_INPUT',
    value: 'test'
  });
});

it('should handle input enter button', () => {
  const props = {
    dispatch: jest.fn()
  };
  const wrapper = mount(<Search {...props} />);
  const input = wrapper.find('input');
  input.simulate('keyPress', { key: 'Enter', keyCode: 13, which: 13 });
  expect(props.dispatch.mock.calls[0][0]).toEqual({
    type: 'REQUEST_SEARCH',
    value: undefined
  });
});

it('should handle clicks on the search button', () => {
  const props = {
    dispatch: jest.fn()
  };
  const wrapper = mount(<Search {...props} />);
  const input = wrapper.find('i');
  input.simulate('click');
  expect(props.dispatch.mock.calls[0][0]).toEqual({
    type: 'REQUEST_SEARCH',
    value: undefined
  });
});
