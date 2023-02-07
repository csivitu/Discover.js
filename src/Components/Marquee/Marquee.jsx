import React from 'react'

const Marquee = () => {
  return (
    <div class="bg-gold relative flex overflow-x-hidden">
        <div class="py-1 animate-marquee whitespace-nowrap">
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
        </div>
        <div class="absolute top-0 py-1 animate-marquee2 whitespace-nowrap">
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
            <span class="text-2xl mx-1">🞰 Computer Society of India</span>
        </div>
    </div>
  )
}

export default Marquee