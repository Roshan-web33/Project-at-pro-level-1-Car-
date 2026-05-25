import React from "react";

const Footer = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-100 px-6 py-8 text-zinc-800">

      {/* Top Section */}
      <div className="space-y-16">
        <div className="flex mt-5">
             <div className='flex flex-col items-center gap-1'>
        <h1 className='font-display font-extrabold tracking-[.3rem] text-xl border-b-2 pb-1.5'>SEMLER</h1>
        <p className='font-thin font-bolds text-[80%]'>PREMIUM</p>
      </div>
        </div>
       

        {/* Address */}
        <div>
          <h1 className="text-xl font-sans font-light leading-tight">
            Premium Danish Bread
          </h1>

          <p className="mt-5 font-extrabold text-xl  leading-8 font-thin text-zinc-700">
            Banevingen 6 <br />
            2200 Copenhagen N
          </p>
        </div>

        {/* Information */}
        <div>
          <h2 className="text-xl mb-5 font-sans font-light leading-tight">
            Information
          </h2>

          <div className="mt-5 flex flex-col gap-3 font-extrabold   leading-8 font-thin text-zinc-700">
            <a href="#">Business Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        {/* Brands */}
        <div>
          <h2 className="text-xl mb-5 font-sans font-light leading-tight">
            Brands
          </h2>

          <div  className="mt-5 flex flex-col gap-3 font-extrabold   leading-8 font-thin text-zinc-700">
            <a href="#">Porsche</a>
            <a href="#">Bentley</a>
            <a href="#">Lamborghini</a>
          </div>
        </div>

        {/* Premium Rolls */}
        <div>
          <h2 className="text-xl mb-5 font-sans font-light leading-tight">
            Premium rolls
          </h2>

          <div  className="mt-5 flex flex-col gap-3 font-extrabold   leading-8 font-thin text-zinc-700">
            <a href="#">Contact</a>
            <a href="#">Employees</a>
            <a href="#">Switch to us</a>
            <a href="#">Flex leasing</a>
            <a href="#">About Semler Premium</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-zinc-300 pt-8">

        <p className=" font-extrabold  font-thin text-zinc-700">
          © 2025 Semler Group - All rights reserved
        </p>

        {/* Social Links */}
        <div className="mt-5 flex  gap-3 font-extrabold   leading-8 font-thin text-black">
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>

      </div>

    </div>
  );
};

export default Footer;