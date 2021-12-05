import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navigation} from "./components/Navigation/Navigation";
import {Messages} from "./components/Messages/Messages";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import './App.css';
import {dialogsPagePT, profilePagePT, sidebarPT} from "./redux/state";


type AppPT = {
    props: sidebarPT & profilePagePT & dialogsPagePT
}

export const App = ({props}: AppPT) => {

    return (
        <div className='app-wrapper'>
            <Header logo={'logo'}/>
            <Navigation sidebar={props.sidebar}/>
            <div>
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={props.profilePage}/>}/>
                    <Route path={'/messages/*'} element={<Messages dialogsPage={props.dialogsPage}
                    />}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>

    );
}


//
// let navBarItemsRoute = [
//     {path: '/profile', element: <Profile/>},
//     {path: '/messages', element: <Messages dialogs={dialogsData} messages={messagesData}/>},// for messages
//     {path: '/news', element: <News/>},
//     {path: '/music', element: <Music/>},
//     {path: '/settings', element: <Settings/>},
// ]