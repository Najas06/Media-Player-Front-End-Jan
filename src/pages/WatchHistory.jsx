import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllVideoHistoryApi } from '../services/allAPI'

const WatchHistory = () => {
  const [videoHistory,setVideoHistory] = useState([])


  // function to get all Video from backend 
  const getAllVideo = async()=>{
    const response = await getAllVideoHistoryApi()
    setVideoHistory(response.data)
  }
  console.log(videoHistory);

  useEffect(()=>{
    getAllVideo()
  },[])
  return (
    <>
      <div className='d-flex align-items-center mx-5 mb-5 mt-5 justify-content-between'>
        <h5>Watch Histoty</h5>
        <Link to={'/home'} className='text-decoration-none'><h6><FontAwesomeIcon icon={faArrowLeft} className='me-2' /><span id='back'>Back to Home</span></h6></Link>
      </div>

      <div className="row mx-4">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-4" style={{ overflow: "auto" }}>
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='text-start'>
              <td>sfswf</td>
              <td>sfsdf</td>
              <td>sfsdf</td>
              <td>sdfsf</td>
              <td>sfsf</td>
            </tbody>
          </table>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default WatchHistory