import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='h-screen overflow-y-scroll overflow-x-hidden bg-black select-none scroll-smooth scrollbar scrollbar-thumb-slate-700 scrollbar-slate-gray-900 scrollbar-w-2 scrollbar-thumb-rounded-lg'>
        <main className='mx-auto h-full'>
            {children}
        </main>
    </div>
  )
}

export default Layout