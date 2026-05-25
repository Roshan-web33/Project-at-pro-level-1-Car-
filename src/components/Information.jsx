import React from 'react'

const Information = () => {
  return (
    <div className=''>
        <div className='grid '>
             <div className=' flex gap-10 flex-col p-10'>
        
        <div className=' uppercase font-sans font-extralight text-3xl tracking-wider'>Information</div>
           <div className=' uppercase  font-extralight text-3xl tracking-wider'>PRICES</div>
        <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-5'>
            <div className='text-gray-400'>Lease type</div>
            <div>Flex leasing</div>
        </div>
         <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-5'>
            <div className='text-gray-400'>Benefit per month</div>
            <div>DKK 127,489</div>
        </div>
        <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-5'>
            <div className='text-gray-400'>First-time performance</div>
            <div>755,250 kr.</div>
        </div>
        <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-5'>
            <div className='text-gray-400'>Residual value </div>
            <div>DKK 4,279,750</div>
        </div>
        <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-5'>
            <div className='text-gray-400'>Maturity</div>
            <div>6 months</div>
        </div>
        <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-5'>
            <div className='text-gray-400'>Total price over the term</div>
            <div>1,520,184 kr.</div>
       </div>

       <div className='flex border border-white  w-[70%] p-3 rounded-4xl'>
        <div className=' w-[50%] flex  justify-center items-center  bg-white text-black rounded-4xl text-center font-thin font-bold'>Excl. VAT</div>
        <div className=' w-[50%] flex  justify-center items-center  text-white rounded-4xl text-center font-thin font-bold'>VAT included</div>
       </div>
            
      
    </div>

    <div className=' flex gap-10 flex-col p-10'>
        
        <div className=' uppercase font-sans font-extralight text-3xl tracking-wider'>Car data</div>
           
        <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-5'>
            <div className='text-gray-400'>Location</div>
            <div>Copenhangen</div>
        </div>
         <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-5'>
            <div className='text-gray-400'>Kilomiter</div>
            <div>60</div>
        </div>
        <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-5'>
            <div className='text-gray-400'>Year</div>
            <div>2022</div>
        </div>
        <div className=' font-thin border-b flex justify-between border-gray-500 text-[1rem] pb-5'>
            <div className='text-gray-400'>1st registration date </div>
            <div>16.02.2022</div>
        </div>

      
    </div>

        </div>
         
    
    </div>
  )
}

export default Information
