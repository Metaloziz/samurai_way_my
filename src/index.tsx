import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {App} from './App';
import {
    dialogsPagePT,
    sidebarPT,
    profilePagePT,
    state,
    rerenderTree
} from "./redux/state";
import './index.css';


let renderEntireTree = (props: sidebarPT & dialogsPagePT & profilePagePT) => {
    ReactDOM.render(
        <BrowserRouter>
            <App props={props}/>
        </BrowserRouter>,
        document.getElementById('root'));
}
renderEntireTree(state)

rerenderTree(renderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
