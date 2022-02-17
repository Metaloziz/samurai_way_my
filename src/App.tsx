import './App.css';
import { News } from 'components/News/News';
import { Login } from 'components/Login/Login';
import { Music } from 'components/Music/Music';
import { Page404 } from 'components/Page404/Page404';
import { Settings } from 'components/Settings/Settings';
import { UsersContainer } from 'components/Users/UsersContainer';
import { HeaderContainer } from 'components/Header/HeaderContainer';
import { ProfileContainer } from 'components/Profile/ProfileContainer';
import { MessagesContainer } from 'components/Messages/MessagesContainer';
import { NavigationContainer } from 'components/Navigation/NavigationContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { Component } from 'react';
import { initializeThunkCreator, userDataInitialStateType } from 'redux/app_reducer';
import { AppStatePT } from 'redux/store_redux';
import { Preloader } from 'components/comonComponents/Preloader';

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
          <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'} />} />
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
        </div>
      </div>
    );
  }
}

type mapDispatchToPropsPT = {
  initializeThunkCreator: () => void
}

const mapDispatchToProps: mapDispatchToPropsPT = {
  initializeThunkCreator,
};

type mapStateToPropsType = (state: AppStatePT) => userDataInitialStateType

const mapStateToProps: mapStateToPropsType = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);