import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const LandingPage = () => {
  return (
    <Fragment>
      <div className="body">
        <div id="all-content">
          <div id="triangles-container">
            <div id="triangles">
              <img className="animated zoomIn" id="circle-triangle" src="assets/images/triangles/circle-triangle.svg" alt="" />     
              <div id="left-orange-container" className="container grow animated infinite pulse duration-5s delay-4s">
                <img className="animated zoomIn image" id="left-orange" src="assets/images/triangles/left-orange.svg" alt="" />
                <div className="middle left-orange-middle">
                  <Link to='content#aboutMe' smooth className='text text-white left-orange-text'>
                    About Me
                  </Link>
                </div>
              </div>
              <img className="animated zoomIn" id="blue-outline" src="assets/images/triangles/blue-outline.svg" alt="" />
              <img className="animated zoomIn" id="left-black-outline" src="assets/images/triangles/left-black-outline.svg" alt="" />
              
              <div id="yellow-triangle-container" className="container grow animated infinite pulse duration-5s delay-4s">
                <img className="animated zoomIn image" src="assets/images/triangles/yellow.svg" alt="" />
                <div className="middle yellow-triangle-middle">
                  <Link to='content#Skills' smooth className='text text-black yellow-triangle-text'>
                    Skills
                  </Link>
                </div>
              </div>

              <div id="black-triangle-container" className="container grow animated infinite pulse duration-5s delay-4s">
                <img className="animated zoomIn image" src="assets/images/triangles/black.svg" alt="" />
                <div className="middle black-triangle-middle">
                  <Link to='content#Portfolio' smooth className='text text-white black-triangle-text'>
                    Portfolio
                  </Link>
                </div>
              </div>
              
              <img className="animated zoomIn" id="orange-outline" src="assets/images/triangles/orange-outline.svg" alt="" />
              <img className="animated zoomIn" id="blue-triangle" src="assets/images/triangles/blue.svg" alt="" />
              
              <div id="right-orange-container" className="container grow animated infinite pulse duration-5s delay-4s">
                <img className="animated zoomIn image" src="assets/images/triangles/right-orange.svg" alt="" />
                <div className="middle right-orange-middle">
                  <Link to='content#contactMe' smooth className='text text-white right-orange-text'>
                    Contact Me
                  </Link>
                </div>
              </div>              
              <img className="animated zoomIn" id="right-black-outline" src="assets/images/triangles/right-black-outline.svg" alt="" />
            </div>
          </div>
          <div id="greetings">
            <div className="section-text">
              <p className="animated fadeIn" id="text1">Hi, there!</p>
              <p className="animated fadeIn" id="text2">I'm Nova</p>
              <p className="animated fadeIn" id="text3">And I'm a Web Developer</p>
            </div>
            <div className="socmed-icons animated fadeIn">
              <a href="https://www.facebook.com/nova.laurente"><i className="fab fa-facebook-f grow"></i></a>
              <a href="https://www.instagram.com/stargirl.codes"><i className="fab fa-instagram grow"></i></a>
              <a href="https://www.linkedin.com/in/nova-laurente"><i className="fab fa-linkedin-in grow"></i></a>
              <a href="https://gitlab.com/novalaurente1"><i className="fab fa-gitlab grow"></i></a>
            </div>
          </div>
        </div>
    </div>
    </Fragment>
  )
}

export default LandingPage;