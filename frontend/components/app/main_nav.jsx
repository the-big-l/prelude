import React from 'react';
import { Link } from 'react-router';

const MainNav = () => (
  <div className='main-nav'>
    <h1>Browse</h1>
    <ul>
      <li><Link to='/songs'>Songs</Link></li>
      <li><Link to='/main'>Main</Link></li>
      <li>Playlists</li>
    </ul>
  </div>
);

export default MainNav;
