import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const LandingPage = () => {
  return (
    <>
    <div className='row my-5 p-5'>
      <div className="col-md-1"></div>
      <div className="col-md-5 m-3">
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:"justify"}} className='mt-3'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, dignissimos amet accusamus quibusdam veritatis ipsum fuga esse itaque, inventore non dolorum. Sed reprehenderit nostrum corrupti harum nulla qui repudiandae dicta!</p>
        <button className='btn btn-warning mt-4'>Get Started</button>
      </div>
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-5 d-flex justify-content-center align-items-center">
        <img src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" alt="" className='w-75 rounded-4' />
      </div>
    </div>
    <br />
    <h2 className='text-center mb-5'>Features</h2>
    <Row className='d-flex justify-content-between px-5'>
      {/* <Col md={1}></Col> */}
      <Col md={3}>
      <Card style={{ width: '100%' }} className='p-2'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif"  width={"100%"} height={"300px"}/>
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col md={3} className='d-flex justify-content-center'>
      <Card style={{ width: '100%' }} className='p-2'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" width={"100%"} height={"300px"} />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col md={3}>
      <Card style={{ width: '100%' }} className='p-2'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" width={'100%'} height={'300px'}/>
      <Card.Body>
        <Card.Title>Music Player</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
      

    </Row>

    <div className='my-5 row'>
    <div className="col-md-1"></div>
    <div className="col-md-10 border p-4 rounded-2 border-2">
      <Row>
        <Col md={6}></Col>
        <Col md={6}><iframe width="100%" height="480" src="https://www.youtube.com/embed/h2TCOz2N-os" title="Najeeb &amp; Prithviraj: Real and Reel Journey | The GoatLife | Aadujeevitham |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
      </Row>
    </div>
    <div className="col-md-1"></div>
    </div>
    </>
  )
}

export default LandingPage