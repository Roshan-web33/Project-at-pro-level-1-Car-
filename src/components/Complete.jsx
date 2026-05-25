import React from 'react'

const Complete = () => {
  return (
 <div className='h-[80vh] flex gap-10 flex-col p-10'>
        
        <div className=' uppercase font-sans font-extralight text-3xl tracking-wider'>Complete equipment list</div>
        <div className=' font-thin border-b border-gray-500 text-[1rem] pb-5'>Exterior color: Blu Arione</div>
         <div className=' font-thin border-b border-gray-500 text-[1rem] pb-5'>Interior color: Custom</div>
          <div className=' font-thin border-b border-gray-500 text-[1rem] pb-5'>Stitching: Nero Ade</div>
           <div className=' font-thin border-b border-gray-500 text-[1rem] pb-5'>Full Interior Carbon Fiber Package</div>
           <button className='flex uppercase text-yellow-300'>Complete Equipment List <span><i class="ri-arrow-down-line"></i></span></button>
            
      
    </div>
  )
}

export default Complete
