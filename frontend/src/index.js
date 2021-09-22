import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

import reducers from './Controllers/reducers'
// // Reducers
// import authReducer from './Controllers/Redux/authSlice'
// import bugReducer from './Controllers/Redux/bugSlice'
// import userReducer from './Controllers/Redux/userSlice'

// // Redux Configure
// const rootReducer = combineReducers({
//   auth : authReducer,
//   bugs : bugReducer,
//   user : userReducer, 
// })

// const store = configureStore({
//   reducer : rootReducer,
// })

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root') 
);
