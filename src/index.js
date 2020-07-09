import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
import {compose, createStore, applyMiddleware} from 'redux'; //
import thunk from 'redux-thunk'
=======
// import {compose, createStore, applyMiddleware} from 'redux'; //
// import thunk from 'redux-thunk'
>>>>>>> da22f8e60df94cb36fda8952fc21115cc17e1fa8

import App from './App';
import store from './redux/store/store'

import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { rootReducer } from './redux/reducers/rootReducer'; //
=======
// import { rootReducer } from './redux/reducers/rootReducer'; //
>>>>>>> da22f8e60df94cb36fda8952fc21115cc17e1fa8

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
