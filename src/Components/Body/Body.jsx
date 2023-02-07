import React from 'react'

const Body = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 py-40'>
        {/* svg 1 */}
        <div className=''>
        </div>
        {/* Body */}
        <div className='items-center text-center'>
            <div className='grid grid-rows-1 grid-rows-3'>
                <h1 className='text-6xl text-yellow'>DISCOVER.JS</h1>
                    <p className='text-xl text-white mx-10 py-2'>
                        CSI brings to you a technical workshop on the concept of javascript with 3 events and with it, an amazing activity to create a portfolio in the end of the event.
                    </p>    
            </div>
            <button className='border border-blue border-r-4 border-b-4 text-blue text-2xl rounded px-7 py-2 hover:text-sky-50 duration-500'>
                Register Now
            </button>
        </div>
        {/* svg 2 */}
        <div className=''>
        </div>
    </div>
  )
}

export default Body