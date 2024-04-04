import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 mt-md-0'>
        <button className='btn btn-warning w-100' type='button' onClick={handleShow}>Add new Category</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPen} className='text-warning me-2 ' />Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='my-3 border border rounded  p-4'>
            <label htmlFor="cname">Category Name</label>
            <input type="text" id='cname' placeholder='Enter Category name' className='form-control mt-3' />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="border border-secondary w-100 p-3 rounded mt-5">
        <div className="d-flex justify-content-between align-items-center ">
          <p>Hindi Songs</p>
          <button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
        <Row>
          <Col sm={12}>
            <VideoCard />
          </Col>
        </Row>
      </div>
      <p className='text-warning mt-3'>No Category Added we yet...</p>
    </>
  )
}

export default Category