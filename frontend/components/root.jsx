import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory } from 'react-router';
  import App from './app';
  import SignupFlowContainer from './session/signup_flow_container';
  import LoginFormContainer from './session/login_form_container';
  import SignupFormContainer from './session/signup_form_container';

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
          path='/method'
          component={SignupFlowContainer}
          onEnter={_redirectIfLoggedIn}
          />
        <Route
          path='/login'
          component={LoginFormContainer}
          onEnter={_redirectIfLoggedIn}
          />
        <Route
          path='/signup'
          component={SignupFormContainer}
          onEnter={_redirectIfLoggedIn}
          />
      </Router>
    </Provider>
  );
}

export default Root;
