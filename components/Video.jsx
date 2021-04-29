import React, {useEffect, useRef} from 'react'


const Video = () => {

    const videoRef = useRef()


    useEffect(() => {
        setTimeout(()=>{
          videoRef.current.play()
        },5000)
      }, []);
    
    return (
        <div>
             <video
        ref={videoRef}
        controls
        autoPlay
        loop
        muted
        style={{
          
        }}>
     <source src="/stars.mp4" type="video/mp4"/>
    </video>
        </div>
    )
}

export default Video
