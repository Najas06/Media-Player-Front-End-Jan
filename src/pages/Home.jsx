import React from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
const Home = () => {
  return (
    <>
      <div className='my-5 container d-flex '>
      <Add/>
      <h4 className='ms-auto'>Watch History
      <FontAwesomeIcon icon={faClockRotateLeft} className='ms-2'/>
      </h4>
      </div>
      <div className="row mt-5 p-4">
        <div className="col-md-9">
          <h3>All Videos</h3>
          <View/>
        </div>
        <div className="col-md-2">
          <Category/>
        </div>
      </div>
    </>
  )
}

export default Home