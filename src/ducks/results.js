import Immutable from 'immutable';
import { createSelector } from 'reselect';

export const addResultsAction = 'ADD_RESULTS';

export default (state = Immutable.fromJS({}), action) => {
  const { type, data } = action;

  switch (type) {
    case addResultsAction:
      return Immutable.fromJS(data.data);
    default:
      return state;
  }
};

export const getResults = state => state.getIn(['results', 'data']);

export const resultsIdSelector = createSelector([getResults], results =>
  results.reduce((acc, result) => acc.concat([result.get('id')]), [])
);

export const makeSingleResultSelector = id =>
  createSelector([getResults], results =>
    results.filter(result => result.get('id') === id).get(0)
  );

const getSearching = state => state.getIn(['search', 'searching']);
export const searchingSelector = createSelector(
  [getSearching],
  searching => searching
);
