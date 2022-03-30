import React from 'react'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'

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
      <div className="flex items-center rounded-full border-2">
        <input type="text" placeholder="Start your search" />
        <SearchIcon className="h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white" />
      </div>

      {/* Right */}
      <div></div>
    </header>
  )
}

export default Header
