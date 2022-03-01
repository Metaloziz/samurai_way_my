import React from 'react';

import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';
import { AppHoc } from 'AppHOC';
import { store } from 'redux/store_redux'; // new store

const renderEntireTree = (): void => {
  ReactDOM.render(<AppHoc />, document.getElementById('root'));
};
renderEntireTree(); // first render
store.subscribe(renderEntireTree); // next render

reportWebVitals();
