import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

// test
import { requestUsers, requestUser } from './actions/user_actions';
import { requestFollowedPlaylists, followPlaylist, unfollowPlaylist } from './actions/playlist_follow_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    Modal.setAppElement(document.body);

    const store = window.currentUser ?
      configureStore({session: {currentUser: window.currentUser}}) :
      configureStore();

    // Testing
    window.requestFollowedPlaylists = requestFollowedPlaylists;
    window.followPlaylist = followPlaylist;
    window.unfollowPlaylist = unfollowPlaylist;
    window.store = store;

    ReactDOM.render(<Root store={store} />, root);
});
