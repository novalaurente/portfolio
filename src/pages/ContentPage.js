import React, { Fragment } from 'react';
import { Sidebar, AboutMe, Portfolio, Skills, ContactMe } from '../sections';

const Content = () => {
  return (
    <Fragment>
      <div className='wrapper'>
        <Sidebar />
        <div className='content'>
          <AboutMe />
          <Portfolio />
          {/* <Skills /> */}
          {/* <ContactMe /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
