import React from 'react';
import Discover_js from "./../Images/Discover_js.svg";
import Elements_left from "./../Images/elements_left.svg"
import Elements_right from "./../Images/elements_right.svg"

const Body = () => {
  return (
    <div id = 'home' className='grid grid-cols-1 sm:grid-cols-3 lg:py-48 md:py-32 sm:py-36'>
        {/* svg 1 */}
        <div className='sm:w-3/5 w-0'>
            <img src={Elements_left} className="" alt="logo" />
        </div>
        {/* Body */}
        <div className='text-center justify-center'>
            <div className='grid grid-rows-1 grid-rows-2'>
                <img src={Discover_js} className="h-full w-full px-10 sm:px-0" alt="logo" />
                <p className='font-body text-sm md:text-l lg:text-xl text-white mx-15 py-10 px-10'>
                    CSI-VIT brings to you a series of technical workshops to introduce you to the world of WebDev. Come along and let us guide you through your very own portfolio website!
                </p>    
            </div>
            <div className='pt-10 md:pb-0 pb-28'>
                <a href = "https://vtop.vit.ac.in/" type='button' className='font-body border border-blue border-r-4 border-b-4 text-blue text-sm lg:text-2xl rounded md:px-16 py-10 md:py-2 px-3 py-1 hover:text-sky-50 duration-500'>
                    Register Now
                </a>
            </div>
            
        </div>
        {/* svg 2 */}
        <div className=' flex justify-end'>
            <img src={Elements_right} className="sm:w-3/5 w-0" alt="logo" />
        </div>
    </div>
  )
}

export default Body