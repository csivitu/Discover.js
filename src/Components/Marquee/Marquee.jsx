import React from 'react'

const Marquee = () => {
  return (

      <div class=" bg-yellow relative flex overflow-x-hidden font-marquee">
        <div class="py-1 animate-marquee whitespace-nowrap">
            <span class="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span class="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span class="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span class="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>    
            <span class="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>   
        </div>
        <div class="absolute top-0 py-1 animate-marquee2 whitespace-nowrap font-marquee">
            <span class="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span class="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span class="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span class="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>  
            <span class="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>   
        </div>
      </div>

    
  )
}

export default Marquee