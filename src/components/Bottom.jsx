import React, { useState, useRef } from 'react'
import gsap from 'gsap'

const Bottom = () => {

  const [showCard, setShowCard] = useState(false)

  const cardRef = useRef()

  const openCard = () => {

    setShowCard(true)

    setTimeout(() => {
      const tl = gsap.timeline()
    tl.fromTo(
        cardRef.current,

         {
           height: 0 ,
          
        },
        {
          y:0,
          height:"80vh",
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        },
       
        )

    }, )
  }

  const closeCard = () => {
   
    gsap.to(cardRef.current, {
      height: 0,

      ease: "power3.in",
      onComplete: () => setShowCard(false)
    })
  }

  return (
    <>

      {/* Popup Card */}
      {
        showCard && (

          <div className='fixed inset-0 z-50 flex justify-center items-end'>

            <div
              ref={cardRef}
              className='bg-white/10 backdrop-blur-2xl rounded-t-[2rem] p-5 text-white min-h-[85vh] w-[90%]'
            >

              {/* Close Button */}
              <div className='flex justify-end mb-5'>
                <button
                  onClick={closeCard}
                  className='w-10 h-10 rounded-full bg-black text-yellow-300 text-xl'
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>

              <h1 className='text-4xl font-light'>
                AVENTADOR
              </h1>

              <div className='mt-10'>

                <h2 className='text-3xl font-semibold'>
                  PRICES
                </h2>

                <div className='mt-6 flex flex-col gap-5 text-gray-200'>

                  <div className='flex justify-between border-b border-gray-500 pb-3'>
                    <p>Lease type</p>
                    <p>Flex leasing</p>
                  </div>

                  <div className='flex justify-between border-b border-gray-500 pb-3'>
                    <p>Benefit per month</p>
                    <p>DKK 127,489</p>
                  </div>

                  <div className='flex justify-between border-b border-gray-500 pb-3'>
                    <p>First-time performance</p>
                    <p>755,250 kr.</p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )
      }


      {/* Bottom Bar */}
      <div className='fixed bottom-8 flex justify-center z-40 w-screen'>

        <div className='flex pl-3 relative pr-3 bg-white/6 backdrop-blur-2xl rounded-[5rem] w-[90%]'>

          <div className='w-[50%] flex p-3 border-r border-gray-500 flex-col items-center'>
            <h1 className='text-[80%]'>
              DKK 127,489/month.
            </h1>

            <p className='text-[70%] text-gray-400'>
              excluding VAT
            </p>
          </div>

          <div className='w-[50%] flex p-3 relative flex-col items-center'>
            <h1 className='text-[80%]'>
              755,250 DKK/issue.
            </h1>

            <p className='text-[70%] text-gray-400'>
              excluding VAT
            </p>
          </div>

          {/* Arrow Button */}
          <button
            onClick={openCard}
            className='w-10 h-10 flex absolute right-2 top-3 rounded-full justify-center items-center text-2xl text-yellow-300 font-bold bg-black'
          >
            <i className="ri-arrow-up-line"></i>
          </button>

        </div>

      </div>

    </>
  )
}

export default Bottom