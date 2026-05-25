import React from 'react'

const Bottom = () => {
  return (
   <div className='fixed bottom-8 flex justify-center z-50 w-screen'>
    <div className='flex pl-3 relative pr-3 bg-white/6 backdrop-blur-2xl rounded-[5rem]   w-[90%] '>
        <div className='w-[50%] flex p-3 border-r border-gray-500 flex-col items-center'>
            <h1 className='text-[80%] '>DKK 127,489/month.</h1>
            <p className='text-[70%] text-gray-400'>excluding VAT</p>
        </div>
         <div className='w-[50%] flex p-3  relative flex-col items-center'>
            <h1 className='text-[80%]'>755,250 DKK/issue.</h1>
            <p className='text-[70%] text-gray-400'>excluding VAT</p>
          
        </div>
          <div className='w-10 h-10 flex absolute right-2 top-3 rounded-full justify-center items-center text-2xl text-yellow-300 font-bold bg-black'><i class="ri-arrow-up-line"></i></div>

    </div>

   </div>
  )
}

export default Bottom
