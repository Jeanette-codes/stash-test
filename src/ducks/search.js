import Immutable from 'immutable';
import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { addResultsAction } from './results';

export const changeSearchInputAction = 'CHANGE_SEARCH_INPUT';
export const requestSearchAction = 'REQUEST_SEARCH';
export const requestMadeAction = 'SEARCH_REQUEST_MADE';
export const searchRequestSucceeded = 'SEARCH_REQUEST_SUCCEEDED';
export const searchRequestFailed = 'SEARCH_REQUEST_FAILED';

export default (state = Immutable.fromJS({}), action) => {
  const { type, value, msg } = action;

  switch (type) {
    case changeSearchInputAction:
      return state.set('value', Immutable.fromJS(value));
    case requestMadeAction:
      return state.set('searching', true);
    case searchRequestSucceeded:
      return state.set('searching', false);
    case searchRequestFailed:
      return state.set('errorMsg', msg);
    default:
      return state;
  }
};

export function* requestSearch({ value }) {
  const key = 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q';
  try {
    yield put({ type: requestMadeAction });
    const data = yield call(() =>
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}=${value}`)
    );
    yield put({ type: searchRequestSucceeded });
    yield put({ type: addResultsAction, data });
  } catch (error) {
    yield put({ type: searchRequestFailed, message: 'fail' });
  }
}

export function* watchSearch() {
  yield takeEvery(requestSearchAction, requestSearch);
}
