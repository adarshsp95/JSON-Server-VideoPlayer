import React from 'react'
import VideoAdd from '../Components/VideoAdd'
import { Link } from 'react-router-dom'
import VideoView from '../Components/VideoView'
import VideoThumbnail from '../Components/VideoThumbnail'

function Home() {
  return (
    <>
    <div className="container mt-5 mb-5 d-flex">
      <div className="add-videos">
        <VideoAdd/>
      </div>
      <Link to={'/history'} style={{textDecoration:'none', color:'white', fontSize:'20px'}} >Watch History</Link>
    </div>
    <div className="container-fluid w-100 mt-5 mb-5 row">
    <div className="all-videos col-lg-9">
      <h2>All Uploaded Videos</h2>
      <VideoView/>
    </div>
    <div className="category col-lg-3">
      <VideoThumbnail/>
    </div>

    </div>
    </>
  )
}

export default Home