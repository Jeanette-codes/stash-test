import React from 'react';
import { mount, shallow } from 'enzyme';
import { SingleResult } from './SingleResult';
import defaultState from '../../defaultState';
import {
  resultsIdSelector,
  makeSingleResultSelector
} from '../../ducks/results';
import {
  addToFavoritesAction,
  removeFromFavoritesAction
} from '../../ducks/favorites';

const resultId = resultsIdSelector(defaultState)[0];
const resultSelctor = makeSingleResultSelector(resultId);
const result = resultSelctor(defaultState);

const props = {
  dispatch: jest.fn(),
  id: resultId,
  result
};

it('should render self and subcomponents', () => {
  const wrapper = mount(<SingleResult {...{ result }} />);

  expect(wrapper.find('div')).toHaveClassName('single-result');
  expect(wrapper.find('img')).toExist();
  expect(wrapper.find('p')).toExist();
});

it('should change class name on click', () => {
  const wrapper = mount(<SingleResult {...{ result }} {...props} />);
  const container = wrapper.find('.single-result');
  container.simulate('click');
  expect(container.html()).toEqual(
    '<div class="single-result favorited"><img src="https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy-preview.gif?cid=4647a4e05b339b514f734c5973ec192f" alt="dogs jumprope GIF"><i class="material-icons">favorite</i><p>dogs jumprope GIF</p></div>'
  );
});

it('should dispatch add and remove', () => {
  const wrapper = mount(<SingleResult {...props} />);
  const container = wrapper.find('.single-result');
  container.simulate('click');
  expect(props.dispatch.mock.calls[0][0]).toEqual({
    type: addToFavoritesAction,
    result
  });
  container.simulate('click');
  expect(props.dispatch.mock.calls[2][0]).toEqual({
    type: removeFromFavoritesAction,
    id: resultId
  });
});
