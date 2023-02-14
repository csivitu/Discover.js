import React from 'react';
import timelinet1 from './../Images/timelinet1.svg';
import timelinet2 from './../Images/timelinet2.svg';
import timelinet3 from './../Images/timelinet3.svg';
import timelinem2 from './../Images/timelinem2.svg';
import timelinem1 from './../Images/timelinem1.svg';
import timelinem3 from './../Images/timelinem1.svg';


const Timeline = () => {
  return (
    <div id = "timeline" className="max-w-7xl mx-auto w-full grid grid-cols-9 pt-10 px-2">
        <div className="col-span-4 w-full h-full ">
                <picture>
                    <source media="(max-width:639px)" srcset={timelinem1}/>
                    <img src={timelinet1} className="" alt="logo" />
                </picture>
        <div className='sm:w-full w-0'>
        </div>
        </div>
            <div className="relative col-span-1 w-full h-full flex justify-center mt-3">
                <div className="h-full w-1 bg-white"></div>
                <div className="absolute w-5 h-5 transform rotate-45 bg-white z-10"></div>
                <div className="absolute w-6 h-6 transform rotate-45 bg-pink z-5 -mt-[2px] blur-sm"></div>
                <div className="absolute md:visible invisible md:w-24 md:ml-20 lg:ml-28 mt-2 lg:w-32 h-1 bg-white "></div>
            </div>
            <div className="col-span-4 w-full h-full ">
                <div className="w-full h-full md:pl-16">
                <h1 className="text-white text-2xl font-medium py-2 text-left">Discover.JS</h1>
                    <p className="text-gray sm:text-base text-xs text-left">Take the first steps of your Javascript journey. We'll teach you all about the basics of the language.</p>
                    <p className="text-gray sm:text-base text-xs text-left pt-5 font-medium">8th February 2023</p>
                    <div className="flex flex-col lg:flex-row">   
                        <p className="text-white sm:text-base text-xs text-left pt-2">Venue: SJT 621,</p>
                        <p className="text-yellow sm:text-base text-xs text-left pt-2"> 11:30 a.m. - 1:30 p.m.</p>
                    </div>
                    
                </div>
            </div>

        <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:px-16">
                <h1 className="text-white text-2xl font-medium py-2 text-right">What's Next?</h1>
                    <p className="text-gray sm:text-base text-xs text-right">Introduction to Next.js, a modern framework used to build web applications.</p>
                    <p className="text-gray sm:text-base text-xs text-right pt-5">11th February 2023</p>
                    <div className="flex flex-col lg:flex-row items-end justify-end">   
                        <p className="text-white sm:text-base text-xs pt-2">Venue: SJT 307,</p>
                        <p className="text-yellow sm:text-base text-xs pt-2"> 10:00 a.m. - 4:00 p.m.</p>
                    </div>
            </div>
        </div>
            <div className="relative col-span-1 w-full h-full flex justify-center">
                    <div className="absolute md:visible invisible md:w-24 md:mr-20 lg:mr-28 mt-7 lg:w-32 h-1 bg-white"></div>
                    <div className="h-full w-1 bg-white"></div>
                    <div className="absolute w-5 h-5 transform rotate-45 bg-white z-10 mt-5"></div>
                    <div className="absolute w-6 h-6 transform rotate-45 bg-blue z-5 mt-[18px] blur-sm"></div>
                
            </div>
            <div className="col-span-4 w-full h-full">
            <div className='sm:w-full md:pl-28 lg:pl-56 flex justify-end pt-24 sm:pt-0'>
                <picture>
                    <source media="(max-width:639px)" srcset={timelinem2}/>
                    <img src={timelinet2} className="" alt="logo" />
                </picture>
            </div>
            </div>

        <div className="col-span-4 w-full pt-20">
                <picture>
                    <source media="(max-width:639px)" srcset={timelinem3}/>
                    <img src={timelinet3} className="" alt="logo" />
                </picture>
        <div className='sm:w-full w-0'></div>
        </div>
            <div className="relative col-span-1 w-full h-full flex justify-center">
                <div className="h-full w-1 bg-white"></div>
                <div className="absolute w-5 h-5 transform rotate-45 bg-white z-10 mt-5"></div>
                <div className="absolute md:visible invisible md:w-24 md:ml-20 lg:ml-28 mt-7 lg:w-32 h-1 bg-white"></div>
                <div className="absolute w-6 h-6 transform rotate-45 bg-purple z-5 mt-[18px] blur-sm"></div>
            </div>
            <div className="col-span-4 w-full h-full pb-20">
                <div className="w-full h-full p-2 md:pl-16">
                <h1 className="text-white text-2xl font-medium py-2 text-left font-bold">What's Next? 2.0</h1>
                    <p className="text-gray sm:text-base text-xs text-left">The workshop series concludes with a hands-on guided project.</p>
                    <p className="text-gray sm:text-base text-xs text-left pt-5">15th February 2023</p>
                    <div className="flex flex-col lg:flex-row">   
                        <p className="text-white sm:text-base text-xs text-left pt-2">Venue: SJT 621,</p>
                        <p className="text-yellow sm:text-base text-xs text-left pt-2"> 11:30 a.m. - 1:30 p.m.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Timeline