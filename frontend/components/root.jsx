import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory } from 'react-router';
  import App from './app';

const Root = (props) => {
  const _redirectIfLoggedIn = () => {
    if (props.store.getState().session.currentUser) {
      hashHistory.replace('/')
    }
  };

  return (
    <div>
      <Provider store={props.store}>
        <Router history={hashHistory}>
          <Route path='/' component={App} />
          <Route
            path='/method'
            component={SignupFlow}
            onEnter={_redirectIfLoggedIn}
            />
          <Route
            path='/login'
            component={Login}
            onEnter={_redirectIfLoggedIn}
            />
          <Route
            path='/signup'
            component={Signup}
            onEnter={_redirectIfLoggedIn}
            />
        </Router>
      </Provider>
    </div>
  );
}

export default Root;
