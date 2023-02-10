import React from 'react'

const Err404 = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 py-64'>
        {/* svg 1 */}
        <div className=''>
        </div>
        {/* Body */}
        <div className='items-center text-center'>
            <div className='grid grid-rows-1 grid-rows-3'>
                <h1 className='font-title text-6xl text-yellow'>404</h1>
                    <p className='font-body text-xl text-white mx-10 py-2'>
                        Page not Found...
                    </p>    
            </div>
        </div>
        {/* svg 2 */}
        <div className=''>
        </div>
    </div>
  )
}

export default Err404