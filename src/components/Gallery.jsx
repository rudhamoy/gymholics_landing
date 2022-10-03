import React from 'react'

const Gallery = () => {
    return (
        <div>
            <h1 className="my-2 font-semibold text-center text-xl">Gallery</h1>
            <div className="grid grid-cols-3 gap-2">
                <img src="gym1.JPG" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="showcase1.JPG" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="showcase2.JPG" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="showcase3.JPG" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="showcase4.JPG" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym3.JPG" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym4.JPG" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym5.JPG" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym6.JPG" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym7.JPG" alt="" className="w-[220px] sm:w-[300px]" />
                <img src="gym8.JPG" alt="" className="w-[220px] sm:w-[300px]" />
            </div>
        </div>
    )
}

export default Gallery