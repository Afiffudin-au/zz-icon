import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import nav from './NavigationBar.module.scss'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
function NavigationBar() {
  const [hamburgerIcon, setHamburgerIcon] = useState<boolean>(false)
  const history = useHistory()
  const linkToPacks = () => {
    history.push('/packs')
  }
  const linkToUiIcons = () => {
    history.push('/ui-icons')
  }
  return (
    <Navbar className={nav.navbar} expand='sm' sticky='top'>
      <Link className={nav.brand} to='/'>
        ZZ - icons
      </Link>
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
          <Nav.Link onClick={linkToPacks} className={nav.link}>
            Packs
          </Nav.Link>
          <Nav.Link onClick={linkToUiIcons} className={nav.link}>
            UIcons
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
