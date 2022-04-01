import React from 'react'
import Image from 'next/image'

const MediumCard = ({ img, title }) => {
  return (
    <div className="transform-duration-300 cursor-pointer transition ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} priority layout="fill" className="rounded-xl " />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  )
}

export default MediumCard
