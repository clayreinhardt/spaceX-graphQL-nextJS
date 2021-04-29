import React, {useEffect, useRef} from 'react'


const Video = ({url}) => {

    const videoRef = useRef()

    const previousUrl = useRef(url);

    // useEffect(() => {
    //     setTimeout(()=>{
    //       videoRef.current.play()
    //     },5000)
    //   }, []);
    useEffect(() => {
      if (previousUrl.current !== url && videoRef.current) {
        videoRef.current.load();
        previousUrl.current = url;
      }
    }, [url]);
    return (
        <div>
             <video
        ref={videoRef}
        controls
        autoPlay
          width="320" height="240"
        loop
        muted
        style={{
          
        }}>
     <source src="/spacex.mp4" type="video/mp4"/>
          {/* <source src={url} type="video/mp4"/> */}
    </video>
        </div>
    )
}

export default Video
