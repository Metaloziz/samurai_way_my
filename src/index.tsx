import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { store } from 'redux/store_redux'; // new store
import { Provider } from 'react-redux'; // !!!!!!!!!!!!!! new component
import App from 'App';
// import {store} from "./redux/store";

setInterval(() => {
  store.dispatch({ type: 'FACE' });
  console.log('tick');
}, 3000);

let renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};
renderEntireTree(); // first render
store.subscribe(renderEntireTree); // next render

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
