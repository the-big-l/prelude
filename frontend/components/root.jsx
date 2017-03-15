import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory } from 'react-router';
  import App from './app';
  import WelcomeScreenContainer from './welcome/welcome_screen_container';

const Root = (props) => {
  const _redirectIfLoggedIn = () => {
    if (props.store.getState().session.currentUser) {
      hashHistory.replace('/')
    }
  };

  return (
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
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
}

export default Root;
