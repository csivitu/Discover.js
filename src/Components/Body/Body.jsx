import React from 'react';
import Discover_js from "./../Images/Discover_js.svg";
import Elements_left from "./../Images/elements_left.svg"
import Elements_right from "./../Images/elements_right.svg"

const Body = () => {
  return (
    <div id = 'home' className='grid grid-cols-1 sm:grid-cols-3 lg:py-28 md:py-32 sm:py-36'>
        {/* svg 1 */}
        <div className=''>
            <img src={Elements_left} className="w-3/5" alt="logo" />
        </div>
        {/* Body */}
        <div className='text-center justify-center'>
            <div className='grid grid-rows-1 grid-rows-2'>
                <img src={Discover_js} className="h-full w-full px-12 md:px-0" alt="logo" />
                <p className='font-body text-sm md:text-l lg:text-xl text-white mx-15 py-10'>
                    CSI brings to you a technical workshop on the concept of javascript with 3 events and with it, an amazing activity to create a portfolio in the end of the event.
                </p>    
            </div>
            <div className='pt-10'>
                <button className='font-body border border-blue border-r-4 border-b-4 text-blue text-xl lg:text-2xl rounded md:px-16 md:py-2 px-3 py-1 hover:text-sky-50 duration-500'>
                    Register Now
                </button>
            </div>
            
        </div>
        {/* svg 2 */}
        <div className='flex justify-end'>
            <img src={Elements_right} className="w-3/5" alt="logo" />
        </div>
    </div>
  )
}

export default Body