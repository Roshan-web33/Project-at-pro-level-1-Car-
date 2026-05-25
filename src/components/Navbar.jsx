import React from 'react'

const Navbar = () => {
  return (
    <>
     <header className='' >
      <nav className='flex z-50 fixed top-0 w-full justify-between p-5'>
        <div className='flex flex-col items-center gap-1'>
        <h1 className='font-display font-extrabold tracking-[.3rem] text-xl border-b-2 pb-1.5'>SEMLER</h1>
        <p className='font-thin font-bolds text-[80%]'>PREMIUM</p>
      </div>
      

      <div className='text-3xl mt-2'>
        <i class="ri-menu-line"></i>
      </div>

      </nav>
          </header>
    </>
  )
}

export default Navbar
