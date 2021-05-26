import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import nav from './NavigationBar.module.scss'
function NavigationBar() {
  return (
    <div className={nav.container}>
      <Navbar className={nav.navbarRoot} expand='lg'>
        <Navbar.Brand className={nav.brand} href='#home'>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className={nav.link} href='#home'>
              Home
            </Nav.Link>
            <Nav.Link className={nav.link} href='#link'>
              Link
            </Nav.Link>
            <Nav.Link className={nav.link} href='#link'>
              Link
            </Nav.Link>
            <Nav.Link className={nav.link} href='#link'>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
