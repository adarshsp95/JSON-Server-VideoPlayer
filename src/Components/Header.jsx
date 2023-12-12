import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <Navbar className="bg-text-light">
        <Container>
          <Navbar.Brand href="#home" className='fw-bolder' style={{color:'white', fontSize:'25px'}}>
          <i class="fa-solid fa-photo-film me-2"></i>{' '}
            PlayPix Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header