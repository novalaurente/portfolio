import React, { Fragment, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const phoneSize = window.matchMedia("(max-width: 360px)");

  const tabletSize = window.matchMedia("(max-width: 768px)");

  const handleCollapseMenu = () => {
    if(phoneSize.matches===true || tabletSize.matches===true){
      setCollapsed(!collapsed)
    }else{
      setCollapsed(collapsed)
    }    
  }

  return (
    <Fragment>
      <Navbar fixed='top' className='sidebar' 
      light
      >
        <div id='navbar-phone'>
          <NavbarBrand href='/'>
            <div className='sidebar-header'>
              <a href='content'>
                <img className='sidebar-logo grow' src='assets/images/portfolio-logo.gif' alt='' />
              </a>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className='mr-2 toggle-button' />
        </div>
        <Collapse 
          isOpen=
          {
            phoneSize.matches===true || tabletSize.matches===true
            ?
            collapsed
            :
            collapsed
          } 
          navbar
          className='sidebar-collapse'
          >
          <Nav className='list-unstyled sidebar-menu' navbar>
            <NavItem className='nav-item'>
                <Link to='content#aboutMe' smooth className='menu' onClick={handleCollapseMenu}>
                  <img
                    className='sidebar-menu-icon image'
                    src='assets/images/sidebar/orange-triangle-icon.svg'
                    alt=''
                  />
                  <span className='text text-orange'>About Me</span>
                </Link>
            </NavItem>
            <NavItem className='nav-item'>
              <Link to='content#Portfolio' smooth className='menu' onClick={handleCollapseMenu}>
                <img
                  className='sidebar-menu-icon image'
                  src='assets/images/sidebar/black-outline-icon.svg'
                  alt=''
                />
                <span className='text text-black'>Portfolio</span>
              </Link>
            </NavItem>
            <NavItem className='nav-item'>
              <Link to='content#Skills' smooth className='menu' onClick={handleCollapseMenu}>
                <img
                  className='sidebar-menu-icon image'
                  src='assets/images/sidebar/blue-triangle-icon.svg'
                  alt=''
                />
                <span className='text text-blue'>Skills</span>
              </Link>
            </NavItem>
            <NavItem className='nav-item'>
              <Link to='content#contactMe' smooth className='menu' onClick={handleCollapseMenu}>
                <img
                  className='sidebar-menu-icon image'
                  src='assets/images/sidebar/yellow-outline-icon.svg'
                  alt=''
                />
                <span className='text text-yellow'>Contact Me</span>
              </Link>
            </NavItem>
          </Nav>
          <Nav className='list-unstyled sidebar-socmed-icons'>
            <NavItem>
              <a href='https://www.facebook.com/nova.laurente'>
                <i className='fab fa-facebook-f grow'></i>
              </a>
            </NavItem>
            <NavItem>
              <a href='https://www.instagram.com/stargirl.codes'>
                <i className='fab fa-instagram grow'></i>
              </a>
            </NavItem>
            <NavItem>
              <a href='https://www.linkedin.com/in/nova-laurente'>
                <i className='fab fa-linkedin-in grow'></i>
              </a>
            </NavItem>
            <NavItem>
              <a href='https://gitlab.com/novalaurente1'>
                <i className='fab fa-gitlab grow'></i>
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Sidebar;
