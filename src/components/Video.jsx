import React, { useRef, useState } from 'react'
import { FaPlay, FaPause } from "react-icons/fa";

const Video = () => {
      const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const handleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }
  return (
    <div className='h-screen relative overflow-hidden'>
         <video
    autoPlay
    loop
    muted
    playsInline
    className='w-full h-full  absolute object-cover'
  >
    <source src="/backs.mp4" type="video/mp4" />
  </video>

 <div   className=' h-full w-full justify-center  items-center flex  absolute z-10'>
    <div  onClick={handleVideo} className='h-[80%]  w-[90%] overflow-hidden rounded-4xl '>
     <video
          ref={videoRef}
    autoPlay
    loop
    muted
    playsInline
    className='w-full h-full   object-cover'
  >
    <source src="/hii.mp4" type="video/mp4" />
  </video>
       <button
           
            className='absolute right-10 bottom-40 bg-white/10 text-white p-4 rounded-full text-xl'
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>   

    </div>

 </div>
      
    </div>
  )
}

export default Video
