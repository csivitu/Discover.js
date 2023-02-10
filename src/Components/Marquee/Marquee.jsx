import React from 'react'

const Marquee = () => {
  return (

      <div className=" bg-yellow relative flex overflow-x-hidden font-marquee">
        <div className="py-1 animate-marquee whitespace-nowrap">
            <span className="md:text-2xl text-l mx-1">&#128944; &nbsp; Computer Society of India &nbsp;</span>
            <span className="md:text-2xl text-l mx-1">&#128944; &nbsp; Computer Society of India &nbsp;</span>
            <span className="md:text-2xl text-l mx-1">&#128944; &nbsp; Computer Society of India &nbsp;</span>
            <span className="md:text-2xl text-l mx-1">&#128944; &nbsp; Computer Society of India &nbsp;</span>    
            <span className="md:text-2xl text-l mx-1">&#128944; &nbsp; Computer Society of India &nbsp;</span>   
        </div>
        <div className="absolute top-0 py-1 animate-marquee2 whitespace-nowrap font-marquee">
            <span className="md:text-2xl text-l mx-1">&#128944; &nbsp; Computer Society of India &nbsp;</span>
            <span className="md:text-2xl text-l mx-1">&#128944; &nbsp; Computer Society of India &nbsp;</span>
            <span className="md:text-2xl text-l mx-1">&#128944; &nbsp; Computer Society of India &nbsp;</span>
            <span className="md:text-2xl text-l mx-1">&#128944; &nbsp; Computer Society of India &nbsp;</span>  
            <span className="md:text-2xl text-l mx-1">&#128944; &nbsp; Computer Society of India &nbsp;</span>   
        </div>
      </div>

    
  )
}

export default Marquee