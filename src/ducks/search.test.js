import reducer, {
  changeSearchInputAction,
  requestMadeAction,
  searchRequestSucceeded,
  requestSearch
} from './search';
import { addResultsAction } from './results';
import Immutable from 'immutable';
import { put, call } from 'redux-saga/effects';

it('should return the initial state', () => {
  expect(reducer(Immutable.fromJS({ value: '' }), {})).toEqual(
    Immutable.fromJS({ value: '' })
  );
});

it('should handle changeSearchInputAction', () => {
  expect(
    reducer(undefined, {
      type: changeSearchInputAction,
      value: 'weeeee'
    })
  ).toEqual(Immutable.fromJS({ value: 'weeeee' }));
});

it('should request search', () => {
  const key = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q';
  const value = 'test';
  const gen = requestSearch(value);

  expect(gen.next().value).toEqual(put({ type: requestMadeAction }));
  expect(gen.next().value).toBeDefined(); // api call is made
  expect(gen.next().value).toEqual(put({ type: searchRequestSucceeded }));
  expect(gen.next().value).toEqual(
    put({ type: addResultsAction, data: undefined })
  );
  expect(gen.next()).toEqual({ value: undefined, done: true });
});
