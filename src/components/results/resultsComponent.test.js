import React from 'react';
import { mount, shallow } from 'enzyme';
import { Results } from './index';
import defaultState from '../../defaultState';
import { resultsIdSelector } from '../../ducks/results';

const resultId = resultsIdSelector(defaultState);
jest.mock('./SingleResult', () => () => <i />);

it('should render self and subcomponents', () => {
  const wrapper = mount(<Results {...{ resultId }} />);

  expect(wrapper.find('div')).toHaveClassName('result-container');
  expect(wrapper.find('i')).toHaveLength(3);
});
