import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {
    addPost,
    dialogsPagePT,
    sidebarPT,
    profilePagePT,
    updateAddPost,
    updateTextMessage,
    addTextMessage
} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let renderEntireTree = (props: sidebarPT & dialogsPagePT & profilePagePT) => {
    ReactDOM.render(
        <BrowserRouter>
            <App props={props}
                 addPost={addPost}
                 updatePost={updateAddPost}
                 addText={addTextMessage}
                 updateText={updateTextMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
    ;
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
