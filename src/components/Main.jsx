import React from 'react'
import videoBg from '../../public/video1.mp4'
import {Link} from 'react-router-dom'
import '../index.css'

const Main = () => {
  return (
    <div className='main'>
        <div className="Overlay"></div>
        <video src={videoBg} autoPlay loop muted/>
        <div className="content">
            <h1>Welcome</h1>
            <p> To the Garage</p>
            <p> ..</p>
           
            <Link to="/SecondPage">
            <div className="btn-main">Lets do the customization</div>
        
      </Link>
           
        </div>

    </div>
  )
}

export default Main