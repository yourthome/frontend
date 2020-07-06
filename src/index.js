import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import App from './App';

import * as serviceWorker from './serviceWorker';
import { rootReducer } from './redux/rootReducer';
import {Provider} from 'react-redux';


const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store = {store}> */}
      <Router>
        {app}
      </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
