import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { addCategoryApi, deleteCategoryApi, getAVideo, getCategoryApi, updateCategoryApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category({dragOutVideoStatus, setDragOutVideoStatus}) {
  const [show, setShow] = useState(false);

  const [categoryName, setCategoryName] = useState('')

  const [allCategory, setAllCategory] = useState([])
  // console.log(categoryName);

  const [allCategoryStatus, setAllCategoryStatus] = useState(false);

  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(false)

  // function to add category  
  const handleAddCategory = async () => {
    let reqBody = {
      category: categoryName,
      allVideos: []
    }
    if (allCategory?.length == 0) {
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Successfully Created')
        setCategoryName('')
        setAllCategoryStatus(true)
        handleClose()
      }
      else {
        toast.error('Something went wrong')
      }
    }
    else {
      const exisitingCategory = allCategory?.find(item => item.category == categoryName)
      if (exisitingCategory) {
        toast.warning('Category Already Exist')
        setCategoryName('')
        handleClose()
      }
      else {
        const result = await addCategoryApi(reqBody)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          toast.success('Successfully Created')
          setCategoryName('')
          setAllCategoryStatus(true)
          handleClose()
        }
        else {
          toast.error('Something went wrong')
        }
      }
    }
  }

  // functiom to get all category 
  const getAllCategory = async () => {
    const result = await getCategoryApi()
    setAllCategory(result.data)
  }
  console.log(allCategory);


  // function to delete category
  const handleDelete = async (id) => {
    const result = await deleteCategoryApi(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      toast.error('Deleted Successfully')
      setDeleteCategoryStatus(true)
    }
    else {
      toast.warning('Something went wrong')
    }
  }
  useEffect(() => {
    getAllCategory()
    setAllCategoryStatus(false)
    setDeleteCategoryStatus(false)
    setDragOutVideoStatus(false)
  }, [allCategoryStatus, deleteCategoryStatus,dragOutVideoStatus])


  // function to delete category 
  const dragOver = (e) => {
    e.preventDefault() // avoid refresh
  }

  // function to drop 
  const videoDrop = async(e, categoryId) => {
    console.log("inside Droped Function");
    console.log(`The card droped id ${categoryId}`);
    const videoId = e.dataTransfer.getData('VideoId')
    // console.log(videoId);

    // api to get the details of video that is dragged
    const {data} = await getAVideo(videoId)
    console.log(data);

    const selectedCategory = allCategory.find(item=>item.id==categoryId)

    if(selectedCategory.allVideos.find(item=>item.id==data.id)){
      toast.error('Already Video exist')
    }
    else{
      selectedCategory.allVideos.push(data)
    }
    await updateCategoryApi(categoryId,selectedCategory)
    getAllCategory()
  }

  // function to send the details of card of View 
  const dragStart = (e,categoryId,videoId)=>{
    console.log(categoryId);
    console.log(videoId);
    let sharedData = {
      categoryId,
      videoId
    }
    e.dataTransfer.setData('sharedData',JSON.stringify(sharedData))
  }

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
            <input type="text" id='cname' placeholder='Enter Category name' className='form-control mt-3' onChange={(e) => setCategoryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length > 0 ?
        allCategory?.map((category) => (
          <div className="border border-secondary w-100 p-3 rounded mt-5" droppable='true' onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, category?.id)}>
            <div className="d-flex justify-content-between align-items-center ">
              <p>{category?.category}</p>
              <button className='btn btn-danger' onClick={() => handleDelete(category?.id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            <Row>
              {category.allVideos.length>0?
                category.allVideos.map((item)=>(
                  <Col sm={12} draggable onDragStart={(e)=>dragStart(e,category.id,item.id)}>
                  <VideoCard displayVideo={item} isPresent = {true} />
                  </Col>
                ))
              :null
              }
            </Row>
          </div >
        ))

        :
        <p className='text-warning mt-3'>No Category Added we yet...</p>
      }
      <ToastContainer theme='dark' position='top-center' autoClose={3000} />

    </>
  )
}

export default Category