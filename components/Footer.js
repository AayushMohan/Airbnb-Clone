import React from 'react'

const Footer = () => {
  return (
    <div className="-y-10 grid grid-cols-1 bg-gray-100 px-32 py-14 text-gray-600 md:grid-cols-4">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer">Help Centre</p>
        <p className="cursor-pointer">Safety information</p>
        <p className="cursor-pointer">Cancellation options</p>
        <p className="cursor-pointer">Our COVID-19 Response</p>
        <p className="cursor-pointer">Supporting people with disabilities</p>
        <p className="cursor-pointer">Report a neighborhood concern</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer">Airbnb.org: disaster relief housing</p>
        <p className="cursor-pointer">Support Afghan refugees</p>
        <p className="cursor-pointer">Combating discrimination</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOSTING</h5>
        <p className="cursor-pointer">Try hosting</p>
        <p className="cursor-pointer">AirCover: protection for Hosts</p>
        <p className="cursor-pointer">Explore hosting resources</p>
        <p className="cursor-pointer">Visit our community forum</p>
        <p className="cursor-pointer">How to host responsibly</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Learn about new features</p>
        <p className="cursor-pointer">Letter from our founders</p>
        <p className="cursor-pointer">Careers</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb Luxe</p>
      </div>
    </div>
  )
}

export default Footer
