import React from 'react';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Page404} from "./components/Page404/Page404";
import {Settings} from "./components/Settings/Settings";
import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {NavigationContainer} from "./components/Navigation/NavigationContainer";
import {UsersContainer} from './components/Users/UsersContainer';


export const App = () => {

    // const props = store.getState() // I can't take _state without this method

    return (
        <div className='app-wrapper'>
            <Header logo={'logo'}/>
            {/*<Navigation/>*/}
            <NavigationContainer/>
            <div>
                <Routes>
                    <Route path={'/'} element={<Navigate replace to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/messages/*'} element={<MessagesContainer/>}/>
                    <Route path={'/users/'} element={<UsersContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/*'} element={<Page404/>}/>
                </Routes>
            </div>
        </div>


    );
}
