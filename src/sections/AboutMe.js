import React, { Fragment } from 'react';

const AboutMe = () => {
  return (
    <Fragment>
      <section className='about-me' id='aboutMe'>
        <div className='section-text'>
          <h1>About Me</h1>
          <p>
            Hello! My name is Nova Laurente and I’m an aspiring web developer from Taguig City. I am
            currently attending a 3-month bootcamp at Zuitt.
          </p>
          <p>
            My interest in the IT industry started during my first job when I became a project
            assistant in the Management Information System team of a government agency where I
            became inspired by the impact my development team has made in some of the other agencies
            we serve. I then spent the next few years as a Business Analyst to further explore this
            industry. But now, I found another aspect of the industry that I want to explore and
            that is -- web development.
          </p>
          <p>
            When I’m not coding, I like to spend my time playing the ukulele at some beach in the
            North during the off-peak season.
          </p>
          <a
            href="https://docs.google.com/document/d/18OlxKz_Q4KTNKMvmTc__9HlDksnNSXDOyTh8PNm96Fw/edit?usp=sharing"
            className='custom-btn'
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
        <div className='profile-pic'>
          <img className='grow' src='assets/images/profile.jpg' alt='author holding phone' />
        </div>
      </section>
    </Fragment>
  );
};

export default AboutMe;
