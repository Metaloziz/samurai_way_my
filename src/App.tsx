import React from 'react';
import './App.css';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Page404} from "./components/Page404/Page404";
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from './components/Users/UsersContainer';
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {NavigationContainer} from "./components/Navigation/NavigationContainer";
import {Navigate, Route, Routes} from "react-router-dom";


export const App = () => {

    // function App() {
    //     let element = useRoutes([
    //         {
    //             path: "/",
    //             element: <Dashboard />,
    //             children: [
    //                 {
    //                     path: "messages",
    //                     element: <DashboardMessages />
    //                 },
    //                 { path: "tasks", element: <DashboardTasks /> }
    //             ]
    //         },
    //         { path: "team", element: <AboutPage /> }
    //     ]);

    // add GPG key


    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavigationContainer/>
            <div>
                <Routes>
                    <Route path={'/'} element={<Navigate replace to={'/profile'}/>}/>
                    <Route path="/profile" element={<ProfileContainer/>}>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>
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
