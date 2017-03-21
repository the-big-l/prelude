import React from 'react';
import AppHeaderContainer from './app/header/app_header_container';
import MainNav from './app/nav/main_nav';
import PlayerContainer from './app/player/player_container';

const App = ({ children }) => (
  <div id='app'>
    <AppHeaderContainer />
    <div id='main-content-wrapper'>
      <MainNav />
      <div id='main'>
        {children}
      </div>
    </div>
    <PlayerContainer />
  </div>
);

export default App;
