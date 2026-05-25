import React from 'react'

const Hilight = () => {
  return (
    <div className='h-[80vh] flex gap-10 flex-col p-10'>
        
        <div className=' uppercase font-sans font-extralight text-3xl tracking-wider'>Highlights</div>
        <div className=' font-thin border-b border-gray-500 text-[1rem] pb-5'>Blu Arione Matt</div>
         <div className=' font-thin border-b border-gray-500 text-[1rem] pb-5'>Full Interior Carbon Fiber Package</div>
          <div className=' font-thin border-b border-gray-500 text-[1rem] pb-5'>Nireo Forged 20/21” Shiny Bronze</div>
           <div className=' font-thin border-b border-gray-500 text-[1rem] pb-5'>Hard Top in Matt Carbon</div>
           <button className='flex uppercase text-yellow-300'>Show all the highlights <span><i class="ri-arrow-down-line"></i></span></button>
            
      
    </div>
  )
}

export default Hilight
