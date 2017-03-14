import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// test
import { login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    const store = window.currentUser ?
      configureStore({session: {currentUser: window.currentUser}}) :
      configureStore();

    // Testing
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.store = store;

    ReactDOM.render(<h1>Welcome to Prelude</h1>, root);
});
