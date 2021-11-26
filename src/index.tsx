import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {state} from "./redux/state";

// let state = {
//     navBarNavLinks: [
//         {path: '/profile', title: 'Profile'},
//         {path: '/messages', title: 'Messages'},
//         {path: '/news', title: 'News'},
//         {path: '/music', title: 'Music'},
//         {path: '/settings', title: 'Settings'},
//     ],
//     messagesItems: {
//         messagesData: [
//             {id: 1, text: 'Hi'},
//             {id: 2, text: 'How are you'},
//             {id: 3, text: 'Good'},
//             {id: 4, text: 'Yo'},
//             {id: 5, text: 'Yo'}
//         ],
//         dialogsData: [
//             {id: 1, name: 'Dmitriy'},
//             {id: 2, name: 'Andrew'},
//             {id: 3, name: 'Alex'},
//             {id: 4, name: 'Yra'},
//             {id: 5, name: 'Mary'}
//         ]
//     }
// }

ReactDOM.render(<App state={state}/>,

    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
