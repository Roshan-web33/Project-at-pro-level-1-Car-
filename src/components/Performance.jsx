import React from 'react'

const Performance = () => {
  return (
    <div className=' h-[80vh] relative overflow-hidden relative'>
        <video
    autoPlay
    loop
    muted
    playsInline
    className='w-full h-full  absolute object-cover'
  >
    <source src="/hello.mp4" type="video/mp4" />
  </video>
    <div className='inset-0 absolute h-full absolute bg-black/30  '></div>

       <div className=' absolute w-full  flex   flex-col gap-10 p-10'>
        
        <div className=' uppercase font-sans font-extralight text-3xl tracking-wider'>Performance</div>
           
        <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-3'>
            <div className='text-gray-400 text-sm'>Horsepower</div>
            <div className='text-3xl'>780 <span className='text-sm'>hp</span></div>
        </div>
         <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-3'>
            <div className='text-gray-400 text-sm'>Acceleration from 0-100 km/h</div>
            <div className='text-3xl'>2.9 <span className='text-sm'>sec.</span></div>
        </div>
         <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-3'>
            <div className='text-gray-400 text-sm'>Top speed</div>
            <div className='text-3xl uppercase'>Automatic <span className='text-sm'></span></div>
        </div>
         <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-3'>
            <div className='text-gray-400 text-sm'>Drive wheel</div>
            <div className='text-2xl uppercase'>Four-wheel drive </div>
        </div>
         <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-3'>
            <div className='text-gray-400 text-sm'>CO₂ emissions</div>
            <div className='text-3xl'>442G <span className='text-sm'>/km</span></div>
        </div>
         <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-3'>
            <div className='text-gray-400 text-sm'>Horsepower</div>
            <div className='text-3xl'>780 <span className='text-sm'>hp</span></div>
        </div>
         

    </div>

    </div>
  )
}

export default Performance
