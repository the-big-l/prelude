import React from 'react';
import AppHeaderContainer from './app/header/app_header_container';
import MainNav from './app/main_nav';
import MainContent from './app/main/main_content_container';


const App = ({ children }) => (
  <div className='app'>
    <AppHeaderContainer />
    <MainNav />
    <MainContentContainer />
  </div>
);

export default App;
