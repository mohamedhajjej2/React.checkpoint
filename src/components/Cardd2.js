import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cardd2() {
  return (
    <Card className='card2'  style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/736x/a2/38/d1/a238d1027fad6cc89d48e79e20cd2c1c.jpg"style={{ width: "18rem" , height:"30rem"}} />
    <Card.Body>
      <Card.Title>Legend of Zelda Blog</Card.Title>
      <Card.Text>
      /r/Zelda is the unofficial hub for anything and everything The Legend of Zelda - the iconic Nintendo series. Feel free to share news, reviews,...
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Cardd2