import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-donwload'>
      <p>For better experince download your app <br/>aatao App
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" /><img src={assets.app_store} alt="" />
      </div>
      </p>
    </div>
  )
}

export default AppDownload