import { Component, lazy, ReactElement, Suspense } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import style from 'App.module.scss';
import { MapDispatchPT } from 'AppHOC';
import { Preloader } from 'components/comonComponents/Preloader';
import { HeaderContainer } from 'components/Header/HeaderContainer';
import { NavigationContainer } from 'components/Navigation/NavigationContainer';
import { UserDataInitialStateType } from 'redux/app_reducer';

const News = lazy(() => import('components/News/News'));
const Login = lazy(() => import('components/Login/Login'));
const Music = lazy(() => import('components/Music/Music'));
const Page404 = lazy(() => import('components/Page404/Page404'));
const Settings = lazy(() => import('components/Settings/Settings'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'));

class App extends Component<MapDispatchPT & UserDataInitialStateType> {
  componentDidMount(): void {
    const { initializeTC } = this.props;
    initializeTC();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount(): void {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  catchAllUnhandledErrors = (): void => {
    // eslint-disable-next-line no-console
    console.warn(`Внимание: Необработанная ошибка Promise. Позор вам! ${this}`);
  };

  render(): ReactElement {
    const { initialized } = this.props;

    if (!initialized) {
      return <Preloader />;
    }

    return (
      <div className={style.app}>
        <HeaderContainer />
        <NavigationContainer />
        <div className={style.main}>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="/samurai_way_my/" element={<Navigate to="/profile" />} />
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
          </Suspense>
        </div>
      </div>
    );
  }
}

export default App;
