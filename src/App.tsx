import React from 'react';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Page404} from "./components/Page404/Page404";
import {Settings} from "./components/Settings/Settings";
import {Navigation} from "./components/Navigation/Navigation";
import {Route, Routes, Navigate} from "react-router-dom";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {actionPT, statePT} from "./redux/store";
import './App.css';

type AppPT = {
    store: AppNewPT
}
type AppNewPT = {
    getState: () => statePT
    subscribe: (props: () => void) => void
    dispatch: (action: actionPT) => void
}

export const App: React.FC<AppPT> = ({store}) => {

    const props = store.getState() // I can't take _state without this method

    return (
        <div className='app-wrapper'>
            <Header logo={'logo'}/>
            <Navigation sidebar={props.sidebar}/>
            <div>
                <Routes>

                    <Route path={'/'} element={<Navigate replace to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile profilePage={props.profilePage}
                                                               dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path={'/messages/*'} element={<MessagesContainer dialogsPage={props.dialogsPage}
                                                                            dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/*'} element={<Page404/>}/>
                </Routes>
            </div>


        </div>

    );
}
