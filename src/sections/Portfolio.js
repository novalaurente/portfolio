import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  return (
    <Fragment>
      <section className='portfolio' id='Portfolio'>
        <div className='section-title-container'>
          <h1>Portfolio</h1>
        </div>
        <div className='section-content'>

          <div className='project-content'>
            <div className='left-section'>
              <Fade left duration={2000} delay={250}>
                <img src='assets/images/project1.png' alt='' />
              </Fade>
            </div>
            <Fade right duration={2000} delay={750}>
              <div className='right-section'>
                <h2>Ikebana Website</h2>
                <p>
                  A website that sells clothes which are fashionable and comfortable at the same
                  time.
                </p>
                <div className='tools'>
                  <button className='pseudo-btn'>HTML5</button>
                  <button className='pseudo-btn'>CSS3</button>
                </div>
                <div className='code'>
                  <a
                    href='https://novalaurente1.gitlab.io/capstone001'
                    className='custom-btn'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View Live
                  </a>
                  <a
                    href='https://gitlab.com/novalaurente1/capstone001'
                    className='custom-btn'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Gitlab Code
                  </a>
                </div>
              </div>
            </Fade>
          </div>

          <div className='project-content' id='project-content-3'>
            <Fade left duration={2000} delay={750}>
              <div className='left-section'>
                <h2>Invento</h2>
                <p>A supplies and equipment inventory management system for an SME.</p>
                <div className='tools'>
                  <button className='pseudo-btn'>BOOTSTRAP</button>
                  <button className='pseudo-btn'>JAVASCRIPT</button>
                  <button className='pseudo-btn'>PHP</button>
                  <button className='pseudo-btn'>MYSQL</button>
                  <button className='pseudo-btn'>LARAVEL</button>
                  <button className='pseudo-btn'>HEROKU</button>
                </div>
                <div className='code'>
                  <a
                    href='http://shielded-earth-19513.herokuapp.com/'
                    className='custom-btn'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View Live
                  </a>
                  <a
                    href='https://gitlab.com/novalaurente1/capstone002'
                    className='custom-btn'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Gitlab Code
                  </a>
                </div>
              </div>
            </Fade>
            <div className='right-section'>
              <Fade right duration={2000} delay={250}>
                <img src='assets/images/project2.png' alt='' />
              </Fade>
            </div>
          </div>
          
          <div className='project-content'>
            <div className='left-section'>
              <Fade left duration={2000} delay={250}>
                <img src='assets/images/project3.png' alt='' />
              </Fade>
            </div>
            <Fade right duration={2000} delay={750}>
              <div className='right-section'>
                <div></div>
                <h2>Ascend Yoga</h2>
                <p>A class booking system for a fictional yoga studio.</p>
                <div className='tools'>
                  <button className='pseudo-btn'>MongoDB</button>
                  <button className='pseudo-btn'>Express.js</button>
                  <button className='pseudo-btn'>React</button>
                  <button className='pseudo-btn'>Node.js</button>
                  <button className='pseudo-btn'>REST API</button>
                  <button className='pseudo-btn'>JWT</button>
                  <button className='pseudo-btn'>Heroku</button>
                  <button className='pseudo-btn'>Netlify</button>
                </div>
                <div className='code'>
                  <a
                    href='https://sad-hugle-294726.netlify.com'
                    className='custom-btn'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View Live
                  </a>
                  <a
                    href='https://gitlab.com/novalaurente1/capstone003'
                    className='custom-btn'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Gitlab Code
                  </a>
                </div>
              </div>
            </Fade>
          </div>

        </div>
      </section>
    </Fragment>
  );
};

export default AboutMe;
