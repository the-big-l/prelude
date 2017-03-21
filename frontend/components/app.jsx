import React from 'react';
import AppHeaderContainer from './app/header/app_header_container';
import MainNavContainer from './app/nav/main_nav_container';
import PlayerContainer from './app/player/player_container';

const App = ({ children }) => (
  <div id='app'>
    <AppHeaderContainer />
    <div id='main-content-wrapper'>
      <MainNavContainer />
      <div id='main'>
        {children}
      </div>
    </div>
    <PlayerContainer />
  </div>
);

export default App;
