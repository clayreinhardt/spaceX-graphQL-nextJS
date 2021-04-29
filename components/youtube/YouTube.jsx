import React, { useRef, useEffect } from 'react'
import YouTube from 'react-youtube'


const Example = ({ videoId, id, className, opts }) => {
  const videoRef = useRef()
  const pause = (e) => {
    e.target.pauseVideo();
  }

  const previousVid = useRef(videoId);
  useEffect(() => {
    if (previousVid.current !== videoId && videoRef.current) {
      videoRef.current.load();
      previousVid.current = videoId;
    }
  }, [videoId]);

  return <YouTube
    key={videoId}
    videoId={videoId}
    onReady={pause}
    id={id}
    className={className}
    opts={opts}
  />
}

export default Example;