import React from 'react';

const Timeline = () => {
  return (
    <div id = "timeline" class="max-w-7xl mx-auto w-full grid grid-cols-9 pt-10 px-2">
        <div class="col-span-4 w-full h-full "></div>
            <div class="relative col-span-1 w-full h-full flex justify-center mt-3">
                <div class="h-full w-1 bg-white"></div>
                <div class="absolute w-5 h-5 transform rotate-45 bg-pink z-10"></div>
                <div class="md:visible invisible ml-28 mt-2 absolute w-32 h-1 bg-white"></div>
            </div>
            <div class="col-span-4 w-full h-full ">
                <div class="w-full h-full md:pl-16">
                <h1 class="text-pink text-2xl font-medium py-2 text-left font-bold">Discover.js</h1>
                    <p class="text-white sm:text-base text-xs text-left">Take the first steps of your Javascript journey. We'll teach you all about the basics of the language.</p>
                    <p class="text-white sm:text-base text-xs text-left pt-5">8th February 2023</p>
                    <p class="text-white sm:text-base text-xs text-left pt-5 font-bold italic">11:30 a.m. to 1:30 p.m.</p>
                </div>
            </div>

        <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full p-2 md:px-16">
                <h1 class="text-blue text-2xl font-medium py-2 text-right font-bold">What's Next?</h1>
                    <p class="text-white sm:text-base text-xs text-right">Introduction to Next.js, a modern framework used to build web applications.</p>
                    <p class="text-white sm:text-base text-xs text-right pt-5">11th February 2023</p>
                    <p class="text-white sm:text-base text-xs text-right pt-5 font-bold italic">10:00 a.m. - 4:30 p.m.</p>
            </div>
        </div>
            <div class="relative col-span-1 w-full h-full flex justify-center">
                    <div class="md:visible invisible mr-28 mt-7 absolute w-32 h-1 bg-white"></div>
                    <div class="h-full w-1 bg-white"></div>
                    <div class="absolute w-5 h-5 transform rotate-45 bg-blue z-10 mt-5"></div>
                
            </div>
            <div class="col-span-4 w-full h-full "></div>

        <div class="col-span-4 w-full h-full pb-20"></div>
            <div class="relative col-span-1 w-full h-full flex justify-center">
                <div class="h-full w-1 bg-white"></div>
                <div class="absolute w-5 h-5 transform rotate-45 bg-purple z-10 mt-5"></div>
                <div class="md:visible invisible ml-28 mt-7 absolute w-32 h-1 bg-white"></div>
            </div>
            <div class="col-span-4 w-full h-full pb-20">
                <div class="w-full h-full p-2 md:pl-16">
                <h1 class="text-purple text-2xl font-medium py-2 text-left font-bold">What's Next? 2</h1>
                    <p class="text-white sm:text-base text-xs text-left">The workshop series concludes with a hands-on guided project.</p>
                    <p class="text-white sm:text-base text-xs text-left pt-5">15th February 2023</p>
                    <p class="text-white sm:text-base text-xs text-left pt-5 font-bold italic">Time - TBA</p>
                </div>
            </div>
    </div>
  )
}

export default Timeline