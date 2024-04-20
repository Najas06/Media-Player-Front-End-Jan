import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryApi, getAllVideoHistoryApi } from '../services/allAPI'

const WatchHistory = () => {

  // to store histort details for apend 
  const [videoHistory, setVideoHistory] = useState([])


  // function to get all Video from backend 
  const getAllVideo = async () => {
    const response = await getAllVideoHistoryApi()
    setVideoHistory(response.data)
  }
  console.log(videoHistory);


  

  useEffect(() => {
    getAllVideo()
  }, [])
  return (
    <>
      <div className='d-flex align-items-center mx-5 mb-5 mt-5 justify-content-between'>
        <h5>Watch Histoty</h5>
        <Link to={'/home'} className='text-decoration-none'><h6><FontAwesomeIcon icon={faArrowLeft} className='me-2' /><span id='back'>Back to Home</span></h6></Link>
      </div>

      <div className="row mx-4">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-4" style={{ overflow: "auto" }}>
          {videoHistory?.length > 0 ?
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
              <tbody className='text-start '>
                {videoHistory?.map((item)=>(
                  <tr>
                  <td>{item?.id}</td>
                  <td>{item?.caption}</td>
                  <td><a href={item?.url} target='_blank'>{item?.url}</a></td>
                  <td>{item?.timeStamp}</td>
                  <td><FontAwesomeIcon icon={faTrash} className='btn btn-outline-danger' onClick={handleDelete(item?.id)}/></td>
                </tr>
                ))
                  }
              </tbody>
            </table>
            :
            <p className='text-warning fs-5 mt-5'>Watch History is clean</p>
          }
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default WatchHistory