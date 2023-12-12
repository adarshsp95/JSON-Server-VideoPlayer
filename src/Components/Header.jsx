import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar className="bg-text-light">
        <Container>
          <Navbar.Brand  className='fw-bolder' style={{color:'white', fontSize:'25px'}}>
            <Link to={'/'} style={{textDecoration:'none'}}>
            <i class="fa-solid fa-photo-film me-2" style={{height:'30px'}}></i>

            </Link>
            PlayPix Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header