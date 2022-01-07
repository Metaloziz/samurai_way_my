import React from 'react';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Header} from "./components/Header/Header";
import {Page404} from "./components/Page404/Page404";
import {Settings} from "./components/Settings/Settings";
import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {NavigationContainer} from "./components/Navigation/NavigationContainer";
import {UsersContainer} from './components/Users/UsersContainer';
import {ProfileContainer} from "./components/Profile/ProfileContainer";


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

    return (
        <div className='app-wrapper'>
            <Header logo={'logo'}/>
            <NavigationContainer/>
            <div>
                <Routes>
                    <Route path={'/'} element={<Navigate replace to={'/profile'}/>}/>
                    {/*///////////////////////////////////////////////////////////////*/}
                    {/*<Route path={'/profile/:userID'} element={<ProfileContainer/>}/>*/}
                    <Route path="/profile" element={<ProfileContainer/>}>
                        <Route path=":userId" element={<ProfileContainer/>}/>
                    </Route>
                    {/*///////////////////////////////////////////////////////////////*/}
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
