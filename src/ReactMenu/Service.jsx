import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Service.css'
import learningImg from '../Images/Softwaredev5.jpg'

const Service = () => {
  return (

    <>
    <div className='Mainheader'>

    <Card className='handlecard'>
          <Card.Header >Page1</Card.Header>
          <Card.Body>
            <img  className='devimg'  src={learningImg} alt=""  />
            <Card.Title>  Title-1 </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='handlecard' >
          <Card.Header >Page2</Card.Header>
          <Card.Body>
          <img  className='devimg'  src={learningImg} alt=""  />
            <Card.Title> Title-2 </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='handlecard bg-primaary'>
          <Card.Header >Page3</Card.Header>
          <Card.Body>
          <img  className='devimg'  src={learningImg} alt=""  />
            <Card.Title> Title-3 </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='handlecard'>
          <Card.Header >Page 4</Card.Header>
          <Card.Body>
          <img  className='devimg'  src={learningImg} alt=""  />
            <Card.Title> Title-4 </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='handlecard'>
          <Card.Header >Page5</Card.Header>
          <Card.Body>
          <img  className='devimg'  src={learningImg} alt=""  />
            <Card.Title> Title-5 </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='handlecard'>
          <Card.Header >Page6</Card.Header>
          <Card.Body>
          <img  className='devimg'  src={learningImg} alt=""  />
            <Card.Title> Title-6 </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card> 
      
      </div>
    </>
  )
}

export default Service