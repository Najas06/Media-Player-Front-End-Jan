import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getCategoryApi, getUploadVideoApi, updateCategoryApi } from '../services/allAPI'

function View({videoUploadStatus,setDragOutVideoStatus}) {
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
  

  const dragOver = (e)=>{
    e.preventDefault()
  }

  const videoDrop =async(e)=>{
    const {categoryId,videoId} = JSON.parse(e.dataTransfer.getData('sharedData'))
    console.log(categoryId,videoId);


    // to get category from backend
    const {data} = await getCategoryApi()

    // get category which have the same category id
    let selectedCategory = data.find((item)=>item.id==categoryId)
    let result = selectedCategory.allVideos.filter((item)=>item.id!=videoId)

    let reqBody = {
      category: selectedCategory.category,
      allVideos: result,
      id: categoryId
    }
    //update the category at the backend
    await updateCategoryApi(categoryId,reqBody)
    setDragOutVideoStatus(true)
    

  }

  useEffect(()=>{
    getVideo()
    setDeleteVideoStatus(false)
  },[videoUploadStatus,deleteVideoStatus])
  return (
    < >
    <div droppable='true' onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
    <Row >
        { video?.length>0?
          video?.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>
          ))
        :
        <h4 className='mt-5 text-warning'>No Video Uploaded Yet...</h4>}
    </Row>
    </div>
    </>
  )
}

export default View