
import React from 'react';
import './index.css';
import App from './components/App';
//import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//import { createStore } from "redux";
import { Provider } from "react-redux";
//import reducer from "./reducers";
//import middleware from './middleware';


//const store = createStore(reducer,middleware)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

//WITH REDUX
/*ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
); */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

