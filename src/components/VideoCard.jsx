import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideoApi } from '../services/allAPI';

function VideoCard({ displayVideo, setDeleteVideoStatus , isPresent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    let caption = displayVideo?.caption
    let url = displayVideo?.embedLink
    let time = new Date()
    let timeStamp =  new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    // console.log(
    //   caption,url,timeStamp
    // );

    const reqBody = {
      caption,
      url,
      timeStamp
    }

    const response = await addToHistory(reqBody)
    console.log(response);
  };

  // delete function 
  const handleDelete = async (id) => {
    const res = await deleteVideoApi(id)
    setDeleteVideoStatus(true)
    console.log(res);
  }

  // drag function 
  const videoDrag = (e,id)=>{
    console.log('inside videoDrag Function');
    console.log(`dragged card is ${id}`);
    e.dataTransfer.setData('VideoId',id)
  }

  return (
    <>
      <Card onClick={handleShow}  style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,displayVideo?.id)} className='mt-2'>
        {!isPresent &&
          <Card.Img variant="top" src={displayVideo?.imagrUrl} width={"300px"} height={'300px'}  style={{ textAlign: "justify"}} />}
        <Card.Body className='d-flex justify-content-between  align-items-center'>
          <Card.Text>{displayVideo?.caption}</Card.Text>
          {!isPresent&&
            <Button variant="danger" onClick={() => handleDelete(displayVideo?.id)}><FontAwesomeIcon icon={faTrash} /></Button>}
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