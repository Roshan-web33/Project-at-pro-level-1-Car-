import React, { useState } from 'react'

const Information = () => {
      const [active, setActive] = useState("exclude")

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
<div className='flex border border-white w-[70%] p-1 rounded-full relative overflow-hidden'>

      {/* Sliding Background */}
      <div
        className={`absolute top-1 bottom-1 w-[48.5%] rounded-full bg-white transition-all duration-300
        ${active === "exclude" ? "left-1" : "left-[50%]"}`}
      ></div>

      {/* Button 1 */}
      <button
        onClick={() => setActive("exclude")}
        className={`w-1/2 z-10 py-2 text-center transition-all duration-300
        ${active === "exclude"
            ? "text-black"
            : "text-white"
          }`}
      >
        Excl. VAT
      </button>

      {/* Button 2 */}
      <button
        onClick={() => setActive("include")}
        className={`w-1/2 z-10 py-2 text-center transition-all duration-300
        ${active === "include"
            ? "text-black"
            : "text-white"
          }`}
      >
        VAT Included
      </button>

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
