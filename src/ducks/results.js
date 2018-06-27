import Immutable from 'immutable';
import { createSelector } from 'reselect';

export default (state = Immutable.fromJS({}), action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

const getResults = state => state.getIn(['results', 'data']);

export const resultsIdSelector = createSelector([getResults], results =>
  results.reduce((acc, result) => acc.concat([result.get('id')]), [])
);

export const makeSingleResultSelector = id =>
  createSelector([getResults], results =>
    results.filter(result => result.get('id') === id).get(0)
  );
