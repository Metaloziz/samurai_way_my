import { ReactElement } from 'react';

import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  HeaderContainer,
  NavigationContainer,
  ProfileContainer,
  MessagesContainer,
  UsersContainer,
  News,
  Music,
  Settings,
  Login,
  Page404,
} from 'components';

export const App = (): ReactElement => (
  <div className="app-wrapper">
    <HeaderContainer />
    <NavigationContainer />
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<ProfileContainer />}>
          <Route path=":userId" element={<ProfileContainer />} />
        </Route>
        <Route path={'/messages/*'} element={<MessagesContainer />} />
        <Route path="/users/" element={<UsersContainer />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path={'/*'} element={<Page404 />} />
      </Routes>
    </div>
  </div>
);
