import React from 'react'

const Header = () => {
  return (
    <section>
        <header>
            <div className='container mx-auto py-10 justify-between flex'>
                <div></div>
                <ul className='md:flex md:gap-x-16 text-yellow text-xl'>
                    <li><a className ='hover:text-sky-50 duration-500' href="/">Home</a></li>
                    <li><a className ='hover:text-sky-50 duration-500' href="#">About</a></li>
                    <li><a className ='hover:text-sky-50 duration-500' href="#">Contact</a></li>
                    <li><a className ='hover:text-sky-50 duration-500' href="/register">Register Now</a></li>
                </ul>
            </div>
        </header>
    </section>
  )
}

export default Header