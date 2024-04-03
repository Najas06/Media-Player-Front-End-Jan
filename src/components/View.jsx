import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'

function View() {
  return (
    <>
    <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard/>
        </Col>
        <h4 className='mt-5 text-warning'>No Video Uploaded Yet...</h4>
    </Row>
    </>
  )
}

export default View