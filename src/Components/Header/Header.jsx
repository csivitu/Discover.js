import React from 'react'

const Header = () => {
  return (
    <section>
        <header>
            <div className='container mx-auto px-20 py-10 md:justify-end justify-center flex'>
                <ul className='flex md:gap-x-24 gap-x-8 text-yellow text-xl font-body'>
                    <li><a className ='hover:text-sky-50 duration-500' href="/">Home</a></li>
                    <li><a className ='hover:text-sky-50 duration-500' href="/timeline">Timeline</a></li>
                    {/* <li><a className ='hover:text-sky-50 duration-500' href="#">Contact</a></li>
                    <li><a className ='hover:text-sky-50 duration-500' href="/register">Register Now</a></li> */}
                </ul>
            </div>
        </header>
    </section>
  )
}

export default Header