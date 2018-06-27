import { combineReducers } from 'redux-immutable';
import search from './search';
import favorites from './favorites';
import results from './results';
import { watchSearch } from './search';
import { all } from 'redux-saga/effects';

export default combineReducers({
  search,
  favorites,
  results
});

export function* rootSaga() {
  yield all([watchSearch()]);
}
