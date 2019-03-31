/* eslint-disable no-underscore-dangle */
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App';
import rootSaga from './sagas';
import 'semantic-ui-css/semantic.min.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

render(React.createElement(Provider, { store }, React.createElement(App)), document.getElementById('root'));
