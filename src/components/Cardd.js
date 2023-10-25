import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cardd() {
  return (
    <Card className='card1' style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/736x/01/1b/97/011b9706c058ea6eb7e68a5eccc3af00.jpg"  style={{ width: "18rem" , height:"30rem"}}/>
    <Card.Body>
      <Card.Title>Tureli</Card.Title>
      <Card.Text>
      The lungs are organ with a cone shape which are located in the chest cavity, and making up most of the lower respiratory tract. They pass…
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Cardd