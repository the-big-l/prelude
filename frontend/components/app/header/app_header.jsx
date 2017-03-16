import React from 'react';

const AppHeader = ({currentUser, logout}) => (
  <header className='app-header'>
    <div className='right-nav'>
      <div className='current-user-info'>
        {currentUser.username}
      </div>
      <ul>
        <li onClick={e => logout()}>
          logout
        </li>
      </ul>
    </div>
  </header>
);

export default AppHeader;
