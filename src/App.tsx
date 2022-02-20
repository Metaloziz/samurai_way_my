import './App.css';
import { HeaderContainer } from 'components/Header/HeaderContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import React, { Component, lazy, Suspense } from 'react';
import { NavigationContainer } from 'components/Navigation/NavigationContainer';
import { userDataInitialStateType } from 'redux/app_reducer';
import { Preloader } from 'components/comonComponents/Preloader';
import { mapDispatchToPropsPT } from 'AppHOC';

const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const News = lazy(() => import('components/News/News'));
const Login = lazy(() => import('components/Login/Login'));
const Music = lazy(() => import('components/Music/Music'));
const Page404 = lazy(() => import('components/Page404/Page404'));
const Settings = lazy(() => import('components/Settings/Settings'));

class App extends Component<mapDispatchToPropsPT & userDataInitialStateType> {

  componentDidMount = () => {
    this.props.initializeThunkCreator();
  };

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavigationContainer />
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={'/'} element={<Navigate to={'/profile'} />} />
              <Route path={'/samurai_way_my/'} element={<Navigate to={'/profile'} />} />
              <Route path='/profile' element={<ProfileContainer />}>
                <Route path=':userId' element={<ProfileContainer />} />
              </Route>
              <Route path={'/messages/*'} element={<MessagesContainer />} />
              <Route path={'/users/'} element={<UsersContainer />} />
              <Route path={'/news'} element={<News />} />
              <Route path={'/music'} element={<Music />} />
              <Route path={'/settings'} element={<Settings />} />
              <Route path={'/login'} element={<Login />} />
              <Route path={'/*'} element={<Page404 />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default App;