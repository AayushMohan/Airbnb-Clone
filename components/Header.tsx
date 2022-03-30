import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 shadow-md md:px-10">
      {/* Left */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          priority
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      <div>
        <input type="text" />
      </div>

      {/* Right */}
      <div></div>
    </header>
  )
}

export default Header
