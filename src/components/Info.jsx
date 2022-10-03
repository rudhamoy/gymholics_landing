import React from 'react'
import Gallery from './Gallery'
import Services from './Services'
import Form from './Form'

const Info = () => {
  return (
    <div className="flex justify-between p-2 sm:p-5 sm:px-20">
        {/* left */}
        <div className="font-semibold hidden sm:block">
            <div className="grid grid-cols-2 gap-x-10 mt-10 pb-5 border-b border-gray-300">
                <p className="text-gray-3">01</p>
                <p>Intro</p>
            </div>
            <div className="grid grid-cols-2 gap-x-10 mt-10 pb-5 border-b border-gray-300">
                <p className="text-gray-400">02</p>
                <p>Services</p>
            </div>
            <div className="grid grid-cols-2 gap-x-10 mt-10 pb-5 border-b border-gray-300">
                <p className="text-gray-400">03</p>
                <p>Offers</p>
            </div>
            <div className="grid grid-cols-2 gap-x-10 mt-10 pb-5">
                <p className="text-gray-400">04</p>
                <p>Join Us</p>
            </div>
        </div>
        {/* Right */}
        <div className=''>
            <Gallery />
            <Services />
            <Form />
        </div>
    </div>
  )
}

export default Info