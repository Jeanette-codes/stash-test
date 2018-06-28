import reducer, {
  addToFavoritesAction,
  removeFromFavoritesAction
} from './favorites';
import Immutable from 'immutable';
import defaultState from '../defaultState';

const initialState = defaultState.get('favorites');
const pagination = initialState.get('pagination').toJS();

const firstAdd = reducer(initialState, {
  type: addToFavoritesAction,
  result: { id: 1 }
});
const secondAdd = reducer(firstAdd, {
  type: addToFavoritesAction,
  result: { id: 2 }
});
const firstRemove = reducer(secondAdd, {
  type: removeFromFavoritesAction,
  id: 1
});

it('should return the initial state', () => {
  expect(reducer(initialState, {})).toEqual(initialState);
});

it('should handle addToFavoritesAction', () => {
  expect(firstAdd).toEqual(
    Immutable.fromJS({ data: [{ id: 1 }], pagination: pagination })
  );
  expect(secondAdd).toEqual(
    Immutable.fromJS({ data: [{ id: 1 }, { id: 2 }], pagination: pagination })
  );
});

it('should handle removeFromFavoritesAction', () => {
  expect(firstRemove).toEqual(
    Immutable.fromJS({ data: [{ id: 2 }], pagination: pagination })
  );
});
