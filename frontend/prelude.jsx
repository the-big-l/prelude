import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

// test
import { requestUserPlaylists, addToPlaylist } from './actions/playlist_actions';
import { fetchUserPlaylists } from './util/playlist_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    Modal.setAppElement(document.body);

    const store = window.currentUser ?
      configureStore({session: {currentUser: window.currentUser}}) :
      configureStore();

    // Testing
    window.requestUserPlaylists = requestUserPlaylists;
    window.addToPlaylist = addToPlaylist;
    window.fetchUserPlaylists = fetchUserPlaylists;
    window.store = store;

    ReactDOM.render(<Root store={store} />, root);
});
