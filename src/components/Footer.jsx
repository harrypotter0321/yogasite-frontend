import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";



function Footer() {
  return (
    <div className='flex items-center flex-col pt-2 mt-3  bg-blue-950'>
        <h3 className='text-white  font-bold text-2xl pb-1'>Gowtham Yoga Center (GYC)</h3>
        <h5 className='text-white font-bold text-xlg pb-2'>A Unit Of Aravind Yoga Center</h5>
        <ul className='flex  w-72 justify-around m-2 '>
            <li className=' text-orange-600 hover:text-red-800 text-3xl'><AiFillInstagram /></li>
            <li className=' text-orange-600 hover:text-red-800 text-3xl'> <FaXTwitter/></li>
            <li className=' text-orange-600 hover:text-red-800 text-3xl'> <BsFacebook/> </li>
            <li className=' text-orange-600 hover:text-red-800 text-3xl'> <AiFillLinkedin/></li>
        </ul>
        <h5 className='text-white font-bold pb-3'>© 2023 Aravind Yogalayam | All Rights Reserved</h5>
    </div>
  )
}

export default Footer