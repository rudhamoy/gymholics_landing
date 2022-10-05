import React from 'react'

const HeroSection = () => {
    return (
        <div className="h-[60vh] sm:h-[90vh] overflow-x-hidden sm:overflow-x-visible">
            <div className="flex justify-center items-center h-[90%] sm:h-[95%] w-[100vw] bg-[#C2CFD6] relative">
                
                <div className="mt-36">
                    <h1 className="text-white sm:text-9xl text-6xl font-bold text-center heading">JOIN <br />GYMHOLICS</h1>
                    <button className="p-2 px-5 bg-cyan-500 text-white rounded-md cursor-pointer mt-4 mb-2">Join us today</button>
                    <p className="text-xs text-gray-600 font-semibold">Transform in 3 months, <br/>valid till 10th Oct, <br/> for first 20 new members only! <span className="text-orange-600">13 left</span></p>
                </div>
                <img src="tinywow_gymholics3.png" alt="" className="h-[460px] sm:h-[600px] absolute left-24 sm:left-[50%] dropShadow" />
                <div className="rounded-md bg-white p-3 sm:p-4 shadow-md absolute left-6 sm:left-60 top-16 heading ">
                    <p className="font-semibold">Offers upto <br /><span className="text-3xl font-bold text-yellow-500">40%</span></p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection