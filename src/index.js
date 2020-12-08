import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import history from './history'

const middleware = [
  thunk
]

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


