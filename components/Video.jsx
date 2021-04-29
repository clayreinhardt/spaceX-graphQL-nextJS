import React, {useEffect, useRef} from 'react'


const Video = ({url}) => {

    const videoRef = useRef()

    const previousUrl = useRef(url);

    useEffect(() => {
        setTimeout(()=>{
          videoRef.current.play()
        },5000)
      }, []);
    useEffect(() => {
      if (previousUrl.current !== url && videoRef.current) {
        videoRef.current.load();
        previousUrl.current = url;
      }
    }, [url]);
    return (
        <div>
             <video
        key={url}
        ref={videoRef}
        controls
        autoPlay
        loop
        muted
        style={{
          
        }}>
     {/* <source src="/stars.mp4" type="video/mp4"/> */}
          <source src={url} type="url"/>
    </video>
        </div>
    )
}

export default Video
