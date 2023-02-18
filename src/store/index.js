/* eslint-disable global-require */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'src/reducer';
import rootSaga from 'src/sagas';

import { createLogger } from 'redux-logger';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();

let middlewares;

if (process.env.NODE_ENV === 'development') {
  middlewares = [sagaMiddleware, logger];
} else {
  middlewares = [sagaMiddleware];
}

// const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
const store = createStore(rootReducer, bindMiddleware(middlewares));
store.sagaTask = sagaMiddleware.run(rootSaga);
export default store;
