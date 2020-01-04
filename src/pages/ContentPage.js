import React, { Fragment } from 'react';
import { AboutMe, Portfolio, Skills, ContactMe } from '../sections';

import Sidebar from '../sections/sidebar/Sidebar';

import './ContentPage.css';

const Content = () => {
  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='content'>
        <AboutMe />
        <Portfolio />
        <Skills />
        <ContactMe />
      </div>
    </div>
  );
};

export default Content;
