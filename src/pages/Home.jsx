import React, { useState } from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
const Home = () => {
   const [videoUploadStatus, setVideoUploadStatus] = useState({})

   const [dragOutVideoStatus, setDragOutVideoStatus] = useState(false)

  return (
    <>
      <div className='my-5 container d-flex '>
      <Add setVideoUploadStatus={setVideoUploadStatus}/>
      <Link to={'/watchhistory'} className='ms-auto text-decoration-none'>
      <h4><span id='wh'>Watch History</span>
      <FontAwesomeIcon icon={faClockRotateLeft} className='ms-2'/>
      </h4>
      </Link>
      </div>
      <div className="row mt-5 p-4 d-flex justify-content-evenly">
        <div className="col-md-9">
          <h3>All Videos</h3>
          <View videoUploadStatus={videoUploadStatus} setDragOutVideoStatus={setDragOutVideoStatus}/>
        </div>
        <div className="col-md-2">
          <Category dragOutVideoStatus = {dragOutVideoStatus} setDragOutVideoStatus={setDragOutVideoStatus}/>
        </div>
      </div>
    </>
  )
}

export default Home