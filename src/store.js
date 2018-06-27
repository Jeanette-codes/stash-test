import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './ducks';
import defaultState from './defaultState';
import { rootSaga } from './ducks';
// import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  appReducer,
  defaultState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);
