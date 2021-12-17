import React from 'react';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Page404} from "./components/Page404/Page404";
import {Settings} from "./components/Settings/Settings";
import {Navigation} from "./components/Navigation/Navigation";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';

// export type AppPT = {
//     store: AppNewPT
// }
// export type AppNewPT = {
//     getState: () => statePT
//     subscribe: (props: () => void) => void
//     dispatch: (action: actionPT) => void
// }

export const App = () => {

    // const props = store.getState() // I can't take _state without this method

    return (
        <div className='app-wrapper'>
            <Header logo={'logo'}/>
            <Navigation/>
            <div>
                <Routes>
                    <Route path={'/'} element={<Navigate replace to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/messages/*'} element={<MessagesContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/*'} element={<Page404/>}/>
                </Routes>
            </div>
        </div>


    );
}
