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
          position: 'absolute', 
          width: "100%",
          left: "50%",
          top: "50%",
          height: "fill",
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: "-1",
          
        }}>
     <source src="/stars.mp4" type="video/mp4"/>
    </video>
        </div>
    )
}

export default Video
