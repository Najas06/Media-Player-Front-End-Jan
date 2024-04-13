import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoCard({displayVideo}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card style={{ width: '100%' }} onClick={handleShow}>
      <Card.Img variant="top" src={displayVideo?.imagrUrl} width={"300px"} height={'300px'} style={{textAlign:"justify"}} />
      <Card.Body className='d-flex justify-content-between  align-items-center'>
        <Card.Text>{displayVideo?.caption}</Card.Text>
        <Button variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="350px" src={`${displayVideo?.embedLink}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard