import React from 'react'
import { BsWhatsapp, BsFacebook } from 'react-icons/bs'
import { FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="mt-10 p-2">
        <p className="font-thin">Spicer College Road, Shitole Nagar, Opp Hotel Gomantak, Old Sangvi, Pune, Maharastra, 411027</p>
        <div>
        <p>Follow us: </p>
        <FaInstagram />
        <BsWhatsapp />
        <BsFacebook />
        </div>
    </div>
  )
}

export default Footer