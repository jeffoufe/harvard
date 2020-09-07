import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { feedReducer } from './reducers';
import { createLogger } from 'redux-logger'
import { watchLoadItems } from './reducers/feed/sagas';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger({});

const store = createStore(
  feedReducer,
  applyMiddleware(sagaMiddleware, logger)
);

function* rootSaga() {
  yield all([
    watchLoadItems()
  ])
}

sagaMiddleware.run(rootSaga);

export default store;