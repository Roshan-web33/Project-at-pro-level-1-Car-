import React from 'react'
import Scroll from './Scroll'

const Home = () => {
  return (
    <div className="h-screen relative overflow-hidden">
  
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="hii.mp4" type="video/mp4" />
  </video>
<div className=' inset-0 absolute z-10 bg-black/65 h-full'> </div>
  {/* Content */}
  <div className="relative z-10 flex items-center flex-col gap-5 tracking-[.1rem] justify-center h-full text-white">
    <h1 className="font-thin">LAMBORGHINI</h1>
    <h1 className='text-5xl font-sans font-light tracking-[.2rem]  mb-40'>AVENTADOR</h1>
  </div>

  

</div>

  )
}

 
export default Home
