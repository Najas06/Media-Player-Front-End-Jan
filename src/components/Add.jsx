import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <h4 >Upload Video <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-2' /> </h4>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><Modal.Title><h4><FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Video</h4></Modal.Title>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>Please fill following details</p>
                <form className='mt-3 border p-3 rounded'>
                    <div className='mb-3'>
                        <input type="text" placeholder='Enter video caption' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Enter Thumbnail URL' className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Enter Youtube video link' className='form-control' />
                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add