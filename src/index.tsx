import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { store } from 'redux/store_redux'; // new store
import { AppHoc } from 'AppHOC';
// import {store} from "./redux/store";

let renderEntireTree = () => {
  ReactDOM.render(<AppHoc />, document.getElementById('root'));
};
renderEntireTree(); // first render
store.subscribe(renderEntireTree); // next render

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
