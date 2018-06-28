import reducer, {
  getResults,
  addResultsAction,
  resultsIdSelector,
  makeSingleResultSelector,
  searchingSelector
} from './results';
import defaultState from '../defaultState';
import Immutable from 'immutable';

const defaultResults = defaultState.get('results');
const results = getResults(defaultState);

it('should get results', () => {
  expect(results).toEqual(defaultState.getIn(['results', 'data']));
});

it('should select all IDs', () => {
  const resultIds = resultsIdSelector(defaultState);
  expect(resultIds).toEqual(['cLcxtL1z8t8oo', 'mokQK7oyiR8Sk', 'JfDNFU1qOZna']);
});

it('should select a result by id', () => {
  const id = 'cLcxtL1z8t8oo';
  const resultSelector = makeSingleResultSelector('cLcxtL1z8t8oo');
  const result = resultSelector(defaultState);
  expect(result).toEqual(
    results.filter(result => result.get('id') === id).get(0)
  );
});

it('should get searching state', () => {
  expect(searchingSelector(defaultState)).toEqual(false);
});

it('should handle initial state', () => {
  const postReducer = reducer(defaultResults, {});
  expect(postReducer).toEqual(defaultResults);
});

it('should add results from the search', () => {
  const newResults = [{ id: 1 }];
  const postReducer = reducer(defaultResults, {
    type: addResultsAction,
    data: { data: newResults }
  });
  expect(postReducer).toEqual(Immutable.fromJS(newResults));
});
