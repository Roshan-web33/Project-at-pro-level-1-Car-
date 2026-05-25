import React from 'react'

const Contect = () => {
  return (
    <div className='pt-10 pl-5 pr-5 pb-10'>
        <h1 className=' uppercase font-sans font-extralight text-3xl tracking-wider text-center'>Contact</h1>
        <div className='flex mt-10 gap-20'>
            <div className='w-[30%] '>
                <div className='w-30 mt-8 ml-5 h-30 overflow-hidden rounded-full bg-amber-600' >
                    <img className='w-full  object-cover ' src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>

                
            </div>
          <div className='flex flex-col gap-1'>
                    <h1 className='font-thin'>COPENHANGEN <span className='text-yellow-300'><i class="ri-map-pin-line"></i></span></h1>
                    <h1 className=' tracking-wide font-extralight text-xl mt-3 mb-3'>Alexander Monk</h1>
                    <p className='font-thin'>Sales consultant</p>
                    <p className='font-thin'>Lamborghini</p>
                    <p className='font-thin'>+45 43 22 33 15

                    </p>

                </div>
        </div>

     
      <div className="w-[340px] mt-10 bg-zinc-100 rounded-xl p-7 shadow-lg">

        {/* Heading */}
        <h1 className="text-xl font-sans font-extralight text-black mb-10">
          CALL ME.
        </h1>

        {/* Inputs */}
        <div className="flex flex-col gap-8">

          <div>
            <input
              type="text"
              placeholder="First name *"
              className="w-full bg-transparent border-b border-zinc-300 outline-none pb-3 text-zinc-600 placeholder:text-zinc-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Last name *"
              className="w-full bg-transparent border-b border-zinc-300 outline-none pb-3 text-zinc-600 placeholder:text-zinc-400"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-transparent border-b border-zinc-300 outline-none pb-3 text-zinc-600 placeholder:text-zinc-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone number *"
              className="w-full bg-transparent border-b border-zinc-300 outline-none pb-3 text-zinc-600 placeholder:text-zinc-400"
            />
          </div>

        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3 mt-14">

          <input className="w-10 h-10 rounded-3xl " type="checkbox" />

          <p className="text-sm text-zinc-600 leading-5">
            I accept Semler Premium's{" "}
            <span className="underline cursor-pointer">
              privacy and data policy
            </span>
          </p>

        </div>

        {/* Button */}
        <button className="mt-10 border-2 border-zinc-500 rounded-full px-6 py-3 flex items-center gap-5 hover:bg-black hover:text-white transition-all duration-300">
          
          <span className=" font-sans font-extralight text-black">CALL ME.</span>

          <div className="w-9 h-9 rounded-full bg-black text-yellow-300 flex items-center justify-center text-xl">
            →
          </div>

        </button>

      </div>



      
    </div>
  )
}

export default Contect
