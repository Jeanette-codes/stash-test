import Immutable from 'immutable';
import { put, takeEvery } from 'redux-saga/effects';

export const changeSearchInputAction = 'CHANGE_SEARCH_INPUT';
export const requestSearchAction = 'REQUEST_SEARCH';

export default (state = Immutable.fromJS({}), action) => {
  const { type, value } = action;

  switch (type) {
    case changeSearchInputAction:
      return state.set('value', Immutable.fromJS(value));
    default:
      return state;
  }
};

export function* requestSearch({ value }) {
  console.log('value', value);

  yield put({ type: 'EXAMPLE' });
}

export function* watchSearch() {
  yield takeEvery(requestSearchAction, requestSearch);
}
