import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import {compose, createStore, applyMiddleware} from 'redux'; //
// import thunk from 'redux-thunk'

import App from './App';
import store from './redux/store/store'

import * as serviceWorker from './serviceWorker';
// import { rootReducer } from './redux/reducers/rootReducer'; //

// const app = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
