import React from 'react';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
  import App from './app';
  import PlaylistContainer from './app/main/playlist/playlist_container';
  import WelcomeScreenContainer from './welcome/welcome_screen_container';
  import SongListContainer from './app/main/song_list/song_list_container';
  import UserIndexContainer from './app/main/user_index/user_index_container';
  import UserProfileContainer from './app/main/user_profile/user_profile_container';
  import CurrentUserProfileContainer from './app/main/user_profile/current_user_profile_container';

const Root = (props) => {
  const _redirectIfLoggedIn = () => {
    if (props.store.getState().session.currentUser) {
      hashHistory.replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/welcome');
    }
  };

  const _redirectToProfile = () => {
    hashHistory.replace('/profile');
  };

  return (
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" onEnter={_ensureLoggedIn} component={App}>
          <Route path='/songs' component={SongListContainer} />
          <Route path='/users' component={UserIndexContainer} />
          <IndexRoute onEnter={_redirectToProfile} component={CurrentUserProfileContainer} />
          <Route path='/users/:id' component={UserProfileContainer} />
          <Route path='/playlists/:id' component={PlaylistContainer} />
          <Route path='/profile' component={CurrentUserProfileContainer} />
        </Route>
        <Route
          path='/welcome'
          component={WelcomeScreenContainer}
          onEnter={_redirectIfLoggedIn}
          />
        <Route
          path='/login'
          component={WelcomeScreenContainer}
          onEnter={_redirectIfLoggedIn}
          />
        <Route
          path='/signup'
          component={WelcomeScreenContainer}
          onEnter={_redirectIfLoggedIn}
          />
      </Router>
    </Provider>
  );
};

export default Root;
