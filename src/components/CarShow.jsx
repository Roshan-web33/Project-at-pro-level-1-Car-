import React from 'react'

const CarShow = () => {
  return (
    <div className='h-[50vh]'>
         <div className=' flex  mt-10 justify-center items-center'>
        <div className='w-[80%] rounded-3xl overflow-hidden  h-[55%] bg-red-400'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?q=80&w=1395&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
    <div className='flex  justify-end gap-10 font-bold text-xl mt-20 pr-10'>
        <div><i class="ri-arrow-left-line"></i></div>
        <div><i class="ri-arrow-right-line"></i></div>
        
    </div>

    </div>
   
  )
}

export default CarShow
