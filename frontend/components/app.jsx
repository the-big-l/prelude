import React from 'react';
import AppHeaderContainer from './app/header/app_header_container';
import MainNav from './app/main_nav';
import MainContentContainer from './app/main/main_content_container';


const App = ({ children }) => (
  <div id='app'>
    <AppHeaderContainer />
    <div id='main-content-wrapper'>
      <MainNav />
      <MainContentContainer />
    </div>
  </div>
);

export default App;
