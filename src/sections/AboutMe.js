import React, { Fragment } from 'react';

const AboutMe = () => {
  return (
    <Fragment>
      <section className='about-me' id='aboutMe'>
        <div className='section-title-container'>
          <h1>About Me</h1>
        </div>
        <div className='section-content'>
          <div className='section-text'>
            <p>
              Hello! My name is Nova Laurente and I’m an aspiring web developer from Taguig City. I
              am currently attending a 3-month bootcamp at Zuitt.
            </p>
            <p>
              My interest in the IT industry started during my first job when I became a project
              assistant in the Management Information System team of DOST-ASTI where I
              became inspired by the impact my development team has made in some of the other
              agencies we serve. I then spent the next few years as a Business Analyst to further
              explore this industry. But now, I found another aspect of the industry that I want to
              explore and that is -- web development.
            </p>
            <p>
              When I’m not coding, I like to spend my time playing the ukulele at some beach in the
              North during the off-peak season.
            </p>
          </div>
          <div className='profile-pic'>
            <img className='grow' src='assets/images/profile.jpg' alt='author holding phone' />
          </div>
          </div>
      </section>
    </Fragment>
  );
};

export default AboutMe;
