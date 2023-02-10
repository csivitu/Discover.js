import React, { useState } from 'react'
import csi from './../Images/csi.svg'
import hamburger_menu from './../Images/hamburger_menu.svg'

const Header = () => {
  function toggle(){
    if (document.getElementById("menu").className == 'text-white text-xl text-yellow lg:hidden -translate-x-full h-0 transition-all ease-in-out duration-100'){
      document.getElementById("menu").className = 'text-white text-xl text-yellow lg:hidden translate-x-0 transition-all ease-in-out duration-500';
    }
    else{
      document.getElementById("menu").className = 'text-white text-xl text-yellow lg:hidden -translate-x-full h-0 transition-all ease-in-out duration-100';
    }
  }
  return (
    <section>
        <header>
            <div className='container mx-auto lg:px-20 px-5 py-16 justify-between flex'>
                <div>
                  <img src={csi} className="pt-2" alt="logo" />
                </div>
                
                <ul className='flex md:gap-x-24 gap-x-8 text-yellow text-xl font-body'>
                    <li><a className ='lg:visible invisible hover:text-sky-50 duration-500' href="#home">Home</a></li>
                    <li><a className ='lg:visible invisible hover:text-sky-50 duration-500' href="#timeline">Timeline</a></li>
                </ul>
                <img id = "icon" onClick={() => {
                  toggle()
                }} src={hamburger_menu} className="lg:hidden mb-2" alt="logo" />
            </div>
            <div id = "menu" className='text-white text-xl text-yellow lg:hidden -translate-x-full h-0 transition-all ease-in-out duration-100'>
              <ul className='flex flex-col items-center text-yellow gap-y-8'>
                <li><a className ='hover:text-sky-50 duration-500' onClick = {() => {toggle()}} href="#home">Home</a></li>
                <li><a className ='hover:text-sky-50 duration-500' onClick = {() => {toggle()}} href="#timeline">Timeline</a></li>
              </ul>
            </div>
        </header>
    </section>
  )
  
}

export default Header



