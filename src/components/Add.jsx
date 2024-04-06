import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoApi } from '../services/allAPI';

function Add() {
    // state to store video details 
    const [video, setVideo] = useState({
        caption:"",
        imagrUrl:"",
        embedLink:""
    })
    console.log(video);

    const getEmededLink = (e) =>{
        const text = e.target.value
        if(text.startsWith('https://youtu.be/')){
            console.log(text.slice(17,28));
            const link = `https://www.youtube.com/embed/${text.slice(17,28)}`
            setVideo({...video,embedLink:link})
        }
        else{
            console.log(text.slice(-11));
            const link = `https://www.youtube.com/embed/${text.slice(-11)}`
            setVideo({...video,embedLink:link})
        }
    }

    // function to upload the video details 
    const handleUpload = async() =>{
        const {caption, imagrUrl, embedLink} = video;
        if(!caption || !imagrUrl || !embedLink){
            toast.warning('Please fill the form properly')
        }
        else{
            // toast.success('Processing')
           const res = await uploadVideoApi(video)
        }
    }
    
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
                        <input type="text" placeholder='Enter video caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})} />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Enter Thumbnail URL' className='form-control' onChange={(e)=>setVideo({...video,imagrUrl:e.target.value})} />
                    </div>
                    <div className='mb-3'>
                        <input type="text" placeholder='Enter Youtube video link' className='form-control' onChange={(e)=>getEmededLink(e)} />
                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer theme='dark' position='top-center' autoClose={3000}/>
        </>
    )
}

export default Add

// https://youtu.be/h2TCOz2N-os

// https://www.youtube.com/watch?v=h2TCOz2N-os

// https://youtu.be/h2TCOz2N-os?si=wjtscBLAIYNUFLgu