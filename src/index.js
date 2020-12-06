import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

const middleware = [
  thunk
]

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


