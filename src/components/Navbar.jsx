import React, { useState, useEffect , useRef } from 'react'
import gsap from 'gsap'


const Navbar = () => {


  
  const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef()
    const navRef = useRef()
      const tl = gsap.timeline() 

      useEffect(() => {

  let lastScroll = 0

  const handleScroll = () => {
    const tl = gsap.timeline()

    const currentScroll = window.scrollY

    if (currentScroll > lastScroll) {

      // scroll down
      gsap.to(navRef.current, {
        y: -100,
        duration: 0.4,
        ease: "power2.out"
      })

    } else {


        tl.to(navRef.current, {
          y: 0,
        backgroundColor: "rgba(255,255,255,0.9)",
       
        color: "black",
        duration: 0.4,
        ease: "power2.out"
      })

      // scroll up
      tl.to(navRef.current, {

        backgroundColor: "transparent",
        color: "white",
        duration: 12000,
        ease: "power2.out"
      })


    }

    lastScroll = currentScroll
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }

}, [])
      
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = ""
  
       tl.fromTo(
        menuRef.current,
        {
           height: 0 ,
          opacity: 0
        },
        {
          height:"100vh",
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }
        

      )

      tl.fromTo(
  "#navbar1 li",
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out"
  }
  
)
     tl.fromTo(
  "#navbar2 li",
  {
    y: 50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out"
  }
  
)
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])


  return (
    <>    <div className=' '>
     <header className='' >
      <nav ref={navRef} className='flex z-50 fixed  top-0 w-full justify-between  pl-5  pr-5 pt-1 pb-1'>
        <div className='flex flex-col items-center gap-1'>
        <h1 className='font-display font-extrabold tracking-[.3rem] text-xl border-b-2 pb-1.5'>SEMLER</h1>
        <p className='font-thin font-bolds text-[80%]'>PREMIUM</p>
      </div>
      

      <div onClick={() => setMenuOpen(!menuOpen)} className='text-3xl mt-2'>
        <i class="ri-menu-line"></i>
      </div>
    
       {
          menuOpen && (

            <div  ref={menuRef}
            className=' h-screen w-full p-5 absolute left-0 top-0 bg-white'>
              <div onClick={() => setMenuOpen(!menuOpen)}  className='fixed top-5 rounded-full text-yellow-200 w-12 flex justify-center items-center bg-zinc-900 h-12 text-xl right-5'><i class="ri-close-large-line"></i></div>
              <div className='flex flex-col items-center text-black fixed top-5 left-5 gap-1'>
        <h1 className='font-display font-extrabold tracking-[.3rem] text-xl border-b-2 pb-1.5'>SEMLER</h1>
        <p className='font-thin font-bolds text-[80%]'>PREMIUM</p>
      </div>
            <ul id='navbar1' className='flex flex-col mt-30 mb-10 gap-5 ml-5 text-4xl text-black font-sans font-extralight'>
              <li><a href="#">SHOWROOM </a></li>
              <li><a href="#">EVENTS </a></li>
              <li><a href="#">PORSCHE </a></li>
              <li><a href="#">BENTLEY</a></li>
              <li><a href="#">LAMBORGHINI</a></li>
            </ul>

            <hr className='text-gray-300 f' />

            <ul id='navbar2' className=' font-extralight ml-5 mt-10 text-black flex flex-col gap-3'>
              <li><a href="#">BOOK A WORKSHOP APPOINTMENT</a></li>
              <li><a href="#">SWITCH TO SEMLER PREMIUM</a></li>
              <li><a href="#">CONTTACT</a></li>
              <li><a href="#">EMPLOYEES</a></li>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">FLEX LEASING</a></li>
              <li><a href="#">ABOUT SEMLER PREMIUM</a></li>
            </ul>
            {/* <div className='text-black flex flex-col fixed  font-extralight  gap-3'>
              <h1>Premium Dasnish Bread</h1>
              <h1>Banevingen 6</h1>
              <p>2200 Copehagen N</p>
            </div>
           */}
            </div>
          )
        }
      

      </nav>
          </header>

          
    </div>
    
    </>
  )
}

export default Navbar
