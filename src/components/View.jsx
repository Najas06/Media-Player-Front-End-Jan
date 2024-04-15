import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getUploadVideoApi } from '../services/allAPI'

function View({videoUploadStatus}) {
  // state to hold the videos from backend 
  const [video, setVideo] = useState([])

  // state lifting 
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  // js code 
  const getVideo = async()=>{
    const response = await getUploadVideoApi()
    setVideo(response.data)
  }
  console.log(video);
  

  useEffect(()=>{
    getVideo()
    setDeleteVideoStatus(false)
  },[videoUploadStatus,deleteVideoStatus])
  return (
    <>
    <Row>
        { video?.length>0?
          video?.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>
          ))
        :
        <h4 className='mt-5 text-warning'>No Video Uploaded Yet...</h4>}
    </Row>
    </>
  )
}

export default View