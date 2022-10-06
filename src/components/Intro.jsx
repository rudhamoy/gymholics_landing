import React from 'react'

const Intro = () => {
  return (
    <div className="heading p-3">
      <h1 className="text-2xl font-semibold uppercase text-gray-600">Do you know ?</h1>
      <p className="text-base font-semibold mb-5 uppercase text-gray-600">You can actually reach your GOAL in <br/><span className="text-orange-600 text-2xl">70 days</span> or less!</p>
      <p className="p-2 border rounded-md shadow-md"><span className="font-semibold text-xl">Gymholics</span> is a personal trainer & instructor focusing on customized and flexible gym programs for your goals and needs, whether that's weight loss, muscle building or just general fitness.</p>
      <br />
      <h1 className="text-xl font-semibold my-6 uppercase text-gray-600">Why Gymholcis is best for you ?</h1>
      <ul className='list-disc px-4 heading'>
        <li className="my-3 leading-7"> We offer several types of packages to suit all budgets, for both women and men who seek for a better and healthier lifestyle.
        </li>
        <li className="my-3 leading-7">Our goal is to help you achieve your fitness goals easily by customizing your training plan with the best suitable gym regimen</li>
        <li className="my-3 leading-7">We ensure that each of our clients get appropriate guidance and motivation all throughout their workouts, which are conducted at our high quality fitness center equipped with the top of the line machines, together with group fitness classes to give you a fun experience while getting fit.</li>
      </ul>
      <br />
      <br />
      <p className=" ">How would you like to become more motivated?</p>
      <br />
      <p className="font-semibold p-2 border rounded-md shadow-md">Fill up the form below and get up to <span className="text-2xl text-orange-600">40%</span> discounts/offers.</p>
    </div>
  )
}

export default Intro