import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import nav from './NavigationBar.module.scss'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
function NavigationBar() {
  const [hamburgerIcon, setHamburgerIcon] = useState<boolean>(false)
  return (
    <Navbar className={nav.navbar} expand='sm' sticky='top'>
      <Navbar.Brand className={nav.brand} href='/'>
        ZZ - icons
      </Navbar.Brand>
      <Navbar.Toggle className={nav.toggle} aria-controls='basic-navbar-nav'>
        {hamburgerIcon ? (
          <CloseIcon
            onClick={() => setHamburgerIcon(!hamburgerIcon)}
            className={nav.closeIcon}
          />
        ) : (
          <MenuIcon
            onClick={() => setHamburgerIcon(!hamburgerIcon)}
            className={nav.hamburgerIcon}
          />
        )}
      </Navbar.Toggle>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link className={nav.link} href='#home'>
            Packs
          </Nav.Link>
          <Nav.Link className={nav.link} href='#link'>
            UIcons
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
