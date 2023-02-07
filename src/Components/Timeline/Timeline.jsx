import React from 'react';

const Timeline = () => {
  return (
    <div class="max-w-7xl mx-auto w-full grid grid-cols-9 pt-10 px-2">
        <div class="col-span-4 w-full h-full "></div>
        <div class="relative col-span-1 w-full h-full flex justify-center pt-3">
            <div class="h-full w-1 bg-white"></div>
            <div class="absolute w-5 h-5 transform rotate-45 bg-pink z-10"></div>
        </div>
        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full md:pl-4">
            <h1 class="text-pink text-2xl font-medium text-left font-bold">Event Name</h1>
                <p class="text-white sm:text-base text-xs text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi</p>
                <p class="text-white sm:text-base text-xs text-left pt-5">8th February 2023</p>
                <p class="text-white sm:text-base text-xs text-left pt-5 font-bold italic">4:00 P.M onwards</p>
            </div>
        </div>

        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full p-2 md:px-4">
                <h1 class="text-blue text-2xl font-medium py-2 text-right font-bold">Event Name</h1>
                <p class="text-white sm:text-base text-xs text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi</p>
                <p class="text-white sm:text-base text-xs text-right pt-5">8th February 2023</p>
                <p class="text-white sm:text-base text-xs text-right pt-5 font-bold italic">4:00 P.M onwards</p>
            </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center">
            <div class="h-full w-1 bg-white"></div>
            <div class="absolute w-5 h-5 transform rotate-45 bg-blue z-10 mt-5"></div>
        </div>
        <div class="col-span-4 w-full h-full "></div>

        <div class="col-span-4 w-full h-full pb-20"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center">
            <div class="h-full w-1 bg-white"></div>
            <div class="absolute w-5 h-5 transform rotate-45 bg-purple z-10 mt-5"></div>
        </div>
        <div class="col-span-4 w-full h-full pb-20">
            <div class="w-full h-full p-2 md:pl-4">
            <h1 class="text-purple text-2xl font-medium py-2 text-left font-bold">Event Name</h1>
                <p class="text-white sm:text-base text-xs text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi</p>
                <p class="text-white sm:text-base text-xs text-left pt-5">8th February 2023</p>
                <p class="text-white sm:text-base text-xs text-left pt-5 font-bold italic">4:00 P.M onwards</p>
            </div>
        </div>
    </div>
  )
}

export default Timeline