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
import {actionPT, statePT} from "./redux/store";
import {Page404} from "./components/Page404/Page404";

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
                    <Route path={'/'} element={<Profile profilePage={props.profilePage}
                                                        dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path={'/profile'} element={<Profile profilePage={props.profilePage}
                                                               dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path={'/messages/*'} element={<Messages dialogsPage={props.dialogsPage}
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
