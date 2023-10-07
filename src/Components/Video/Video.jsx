import React, { useRef, useState } from 'react'
import './Video.css'
import video from './rest.mp4'
export default function Video() {
    let videref=useRef()
    const [playy, setplayy] = useState(false)
    function handleStart(){
setplayy(!playy)
if(playy){
    videref.current.pause()
    
}else{
    videref.current.play()

}
    }
  return (
    <div className='Video'>
        <video 
        ref={videref}
         src={video}
          autoPlay
           loop
            muted
             >
                 </video>
                 <div className="overLayVideo" onClick={handleStart}>
                    {playy?
                       <p className='iconVideo'>
                       <i class="fa-regular fa-circle-pause"></i>
                   </p>
                    :
<p className='iconVideo'><i class="fa-solid fa-circle-play"></i></p>
                    }
                 </div>
    </div>
  )
}
