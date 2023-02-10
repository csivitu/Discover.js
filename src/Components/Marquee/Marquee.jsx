import React from 'react'

const Marquee = () => {
  return (

      <div className=" bg-yellow relative flex overflow-x-hidden font-marquee">
        <div className="py-1 animate-marquee whitespace-nowrap">
            <span className="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span className="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span className="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span className="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>    
            <span className="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>   
        </div>
        <div className="absolute top-0 py-1 animate-marquee2 whitespace-nowrap font-marquee">
            <span className="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span className="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span className="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>
            <span className="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>  
            <span className="md:text-2xl text-l mx-1">&#128944; Computer Society of India</span>   
        </div>
      </div>

    
  )
}

export default Marquee