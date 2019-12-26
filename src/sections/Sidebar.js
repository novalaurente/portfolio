import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Sidebar = () => {
  return (
    <Fragment>
      <nav id='sidebar'>
        <div className='sidebar-header'>
          <a href='content'>
            <img className='sidebar-logo grow' src='assets/images/portfolio-logo.gif' alt='' />
          </a>
        </div>

        <ul className='list-unstyled sidebar-menu'>
          <li>
            <Link to='content#aboutMe' smooth className='menu'>
              <img
                className='sidebar-menu-icon image'
                src='assets/images/sidebar/orange-triangle-icon.svg'
                alt=''
              />
              <span className='text text-orange'>About Me</span>
            </Link>
          </li>
          <li>
            <Link to='content#Portfolio' smooth className='menu'>
              <img
                className='sidebar-menu-icon image'
                src='assets/images/sidebar/black-outline-icon.svg'
                alt=''
              />
              <span className='text text-black'>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to='content#Skills' smooth className='menu'>
              <img
                className='sidebar-menu-icon image'
                src='assets/images/sidebar/blue-triangle-icon.svg'
                alt=''
              />
              <span className='text text-blue'>Skills</span>
            </Link>
          </li>
          <li>
            <Link to='content#contactMe' smooth className='menu'>
              <img
                className='sidebar-menu-icon image'
                src='assets/images/sidebar/yellow-outline-icon.svg'
                alt=''
              />
              <span className='text text-yellow'>Contact Me</span>
            </Link>
          </li>
        </ul>

        <ul className='list-unstyled socmed-icons'>
          <li>
            <a href='https://www.facebook.com/nova.laurente'>
              <i className='fab fa-facebook-f grow'></i>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/stargirl.codes'>
              <i className='fab fa-instagram grow'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/nova-laurente'>
              <i className='fab fa-linkedin-in grow'></i>
            </a>
          </li>
          <li>
            <a href='https://gitlab.com/novalaurente1'>
              <i className='fab fa-gitlab grow'></i>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
