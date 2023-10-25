import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardd3() {
  return (
    <Card className='card3' style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/736x/c1/24/64/c12464184ca50a3fb78afc8f9308b7d2.jpg"style={{ width: "18rem" , height:"30rem"}} />
    <Card.Body>
      <Card.Title>Ready to fight</Card.Title>
      <Card.Text>
      Nintendo's most popular bishounen, on reddit! Whether your knight wears a green getup, blue pajamas, or even just trousers (I won't judge) Link...
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Cardd3