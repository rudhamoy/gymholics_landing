import React from 'react'

const Gallery = () => {
    return (
        <div>
            <h1 className="my-2 font-semibold text-center text-xl">Gallery</h1>
            <div className="grid grid-cols-3 gap-2">
                <img src="gym1_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="showcase1_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="showcase2_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="showcase3_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="showcase4_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym3_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym4_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym5_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym6_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym7_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym8_50.jpg" alt="" className="w-[220px] sm:w-[300px]" />
            </div>
        </div>
    )
}

export default Gallery