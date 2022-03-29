import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      {/* Left */}
      <div className="relative my-auto flex h-10 w-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Center */}
      <div></div>

      {/* Right */}
      <div></div>
    </header>
  )
}

export default Header
