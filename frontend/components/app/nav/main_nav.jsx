import React from 'react';
import { Link } from 'react-router';

const MainNav = () => (
  <div id='main-nav'>
    <div className='list-holder'>
      <div className='side-list-container'>
        <h4>Browse</h4>
        <ul className='side-list'>
          <li><Link to='/songs'>Songs</Link></li>
          <li><Link to='/main'>Main</Link></li>
        </ul>
      </div>
      <div className='side-list-container'>
        <h4>Playlists</h4>
        <ul className='side-list'>
          <li><Link to='/songs'>Songs</Link></li>
          <li><Link to='/main'>Main</Link></li>
        </ul>
      </div>
    </div>
    <aside className='new-playlist-btn-container'>
      <div className='plus-icon'></div>
      <p>New Playlist</p>
    </aside>
  </div>
);

export default MainNav;
