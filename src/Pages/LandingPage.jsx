import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style/LandingPageStyle.css'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <div className='container mt-5'>
        <div className="d-flex flex-direction-row justify-content-between align-items-center">
          <div className="welcome col-lg-4">
            <h3>Welcome To <span className='text-warning'>MediaPlayer</span> </h3>
            <p style={{ textAlign: 'justify' }}>MediaPlayer App Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptates esse odit numquam exercitationem cum cupiditate dolor ut. Repudiandae temporibus culpa fuga pariatur molestiae, velit perspiciatis modi sequi exercitationem consequatur!</p>
            {/* button  */}
            <Link to={'/home'} className='button btn mt-5 fw-bold'>Get Started</Link>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <img style={{ border: 'none', borderRadius: '5px', boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.5)', width:'400px' }} className='img-fluid' src="https://i.postimg.cc/FHnPHnwk/PLAYPIX-MEDIA-PLAYER.png" alt="img" />

          </div>
        </div>
      </div>
      {/* -------------------------------- */}
      <div className="features">
        <h3 className='text-center'>FEATURES</h3>
        <div className="cards-mt-5 d-flex justify-content-between p-5">
          {/* card 1  */}
          <Card className="custom-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          {/* card 2  */}
          <Card className="custom-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          {/* card 3  */}
          <Card className="custom-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="row mt-5 border rounded align-items-center p-5">
          <div className="col-lg-5">
            <h3>SIMPLE, FAST & POWERFUL</h3>
            <p> <span>Play Everything: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium similique dolor, quod natus dolore ullam nobis iure pariatur maiores mollitia, qui error vero aliquid omnis nisi voluptas facere magni?</p>
            <p> <span>Categorise videos: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium similique dolor, quod natus dolore ullam nobis iure pariatur maiores mollitia, qui error vero aliquid omnis nisi voluptas facere magni?</p>
            <p> <span>Watch History: </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium similique dolor, quod natus dolore ullam nobis iure pariatur maiores mollitia, qui error vero aliquid omnis nisi voluptas facere magni?</p>

          </div>
          <div className="col-lg-1">

          </div>
          <div className="col-lg-6">
            <iframe src="" frameborder="0"></iframe>
          </div>
        </div>
      </div>

    </>
  )
}

export default LandingPage