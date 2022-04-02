import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        priority
        src="https://a0.muscache.com/im/pictures/23b047cd-19c9-42c0-a83b-2f4f6f25717b.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute bottom-12 w-full text-center">
        <p className="letter-spacing pb-8 text-sm font-medium tracking-wide text-white md:text-[48px]">
          Let your curiosity do the booking
        </p>

        <button className="text my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
