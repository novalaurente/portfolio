import React, { Fragment, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Portfolio = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);

  const toggleFirstModal = () => setFirstModal(!firstModal);
  const toggleSecondModal = () => setSecondModal(!secondModal);
  const toggleThirdModal = () => setThirdModal(!thirdModal);

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
                  <a 
                    onClick={toggleFirstModal}
                    className='custom-btn'
                  >
                    {buttonLabel} Screenshots
                  </a>                  
                    <Modal isOpen={firstModal} toggle={toggleFirstModal} className={className} size={'lg'}>
                      <ModalHeader toggle={toggleFirstModal}>Ikebana Website Screenshots</ModalHeader>
                      <ModalBody>
                      <div className='h-100 col-lg-10 mx-auto d-flex justify-content-center'>
                        <Carousel autoPlay interval={1500} infiniteLoop >
                          <div>
                            <img src='assets/images/capstone1-1.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone1-2.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone1-3.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone1-4.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone1-5.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone1-6.png' />
                          </div>
                        </Carousel>
                      </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={toggleFirstModal}>Close</Button>
                      </ModalFooter>
                    </Modal>
                </div>
              </div>
            </Fade>
          </div>

          <div className='project-content' id='project-content-3'>
            <Fade left duration={2000} delay={750}>
              <div className='left-section'>
                <h2>Invento</h2>
                <p>A supplies and equipment inventory management system for an SME. Contact me for admin access. </p>
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
                  <a 
                    onClick={toggleSecondModal}
                    className='custom-btn'
                  >
                    {buttonLabel} Screenshots
                  </a>                  
                    <Modal isOpen={secondModal} toggle={toggleSecondModal} className={className} size={'lg'}>
                      <ModalHeader toggle={toggleSecondModal}>Invento Screenshots</ModalHeader>
                      <ModalBody>
                      <div className='h-100 col-lg-10 mx-auto d-flex justify-content-center'>
                        <Carousel autoPlay infiniteLoop >
                          <div>
                            <img src='assets/images/capstone2-1.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone2-2.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone2-3.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone2-4.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone2-5.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone2-6.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone2-7.png' />
                          </div>
                        </Carousel>
                      </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={toggleSecondModal}>Close</Button>
                      </ModalFooter>
                    </Modal>
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
                <p>A class booking system for a fictional yoga studio. Contact me for admin access.</p>
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
                    href='https://ascendyoga.netlify.com'
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
                  <a 
                    onClick={toggleThirdModal}
                    className='custom-btn'
                  >
                    {buttonLabel} Screenshots
                  </a>                  
                    <Modal isOpen={thirdModal} toggle={toggleThirdModal} className={className} size={'lg'}>
                      <ModalHeader toggle={toggleThirdModal}>Ascend Yoga Screenshots</ModalHeader>
                      <ModalBody>
                      <div className='h-100 col-lg-10 mx-auto d-flex justify-content-center'>
                        <Carousel autoPlay infiniteLoop >
                          <div>
                            <img src='assets/images/capstone3-2.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone3-3.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone3-4.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone3-8.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone3-9.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone3-10.png' />
                          </div>
                          <div>
                            <img src='assets/images/capstone3-11.png' />
                          </div>
                        </Carousel>
                      </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={toggleThirdModal}>Close</Button>
                      </ModalFooter>
                    </Modal>
                </div>
              </div>
            </Fade>
          </div>

        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
