import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'; // 미들웨어 적용
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
// import loggerMiddleware from './lib/loggerMiddleware'; // 직접 만든 미들웨어 사용
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk'; // thunk 적용

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk)); // 미들웨어 적용 -> thunk

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
