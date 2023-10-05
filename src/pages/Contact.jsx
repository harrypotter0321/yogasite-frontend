import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import contactbg from '../images/wallpaper/contactbg.jpg'
import { Button, Form } from 'react-bootstrap';
import InputAdornment from '@mui/material/InputAdornment';
import { BiSolidUserCircle } from "react-icons/bi";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { FaLocationDot } from "react-icons/fa6";

function Contact() {

  const contactback = {
    backgroundImage: `url(${contactbg})`,
    backgroundSize: 'cover'

  }

  return (
    <>
      <Navbar />

      {/* location map */}
      <div className=' mt-20 bg-slate-500 h-20 flex items-center justify-center'>
        <h4 className=' text-2xl font-bold'>LOCATION MAP</h4>
      </div>
      <div className='mt-3 flex justify-center'>
        <iframe className='shadow-xl shadow-slate-400' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.187001709744!2d77.50366593938038!3d11.247650022639629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90db698f56f49%3A0x3db4e0efc8df50f1!2sGowtham%20yoga%20center!5e0!3m2!1sen!2sin!4v1696095748274!5m2!1sen!2sin" width="80%" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='mt-4 flex w-screen gap-10 justify-center'>
        <div className='bg-red-400 h-20 w-2/6 p-2 flex  justify-center gap-1'>
          <div className='w-1/6 flex items-center'>
            <p className='text-3xl '><FaLocationDot /></p>
          </div>

          <div className=' w-4/6'>
            <h4 className=' text-white font-bold text-md'>1/622 , Cheran Nagar, Mekkur,</h4>
            <h4 className=' text-white font-bold text-md'>Vijayamangalam - 638 056 , Erode Dt ,</h4>
            <h4 className=' text-white font-bold text-md'>  Tamilnadu</h4>
          </div>
        </div>

        <div className='bg-red-400 h-20 w-2/6 p-2 flex flex-col justify-center gap-1'>
          <div className='flex gap-3 items-center'>
            <p className=' text-red-700 hover:text-red-800 text-3xl'> <BiLogoGmail /></p>
            <p className=' text-white font-bold text-md'>gowthamtvjm@gmail.com</p>
          </div>
          <div className='flex gap-3 items-center'>
            <p className=' text-green-700 hover:text-green-800 text-3xl'><IoLogoWhatsapp /></p>
            <p className=' text-white font-bold text-md'>91 73395 95046</p>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className='flex justify-center mt-4  mb-7'>
        <div className='shadow-2xl shadow-slate-500 w-4/5 h-96 flex' >
          <div style={contactback} className=' h-full w-2/4' >

          </div>
          <div className='w-2/4 '>
            <h4 className='text-white pb-6 font-bold text-2xl pt-4 pl-3 bg-red-400'>Get In Touch</h4>
            <Form className='mt-7 pl-3 pr-10'>
              <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                <Input
                  className=' bg-slate-100 w-full h-10 '
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment className=' ml-4 pr-4' position="start">
                      <BiSolidUserCircle />
                    </InputAdornment>
                  }
                  placeholder='Name'
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Input
                  className=' bg-slate-100 w-full h-10 '
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment className=' ml-4 pr-4' position="start">
                      <BiLogoGmail />
                    </InputAdornment>
                  }
                  placeholder='Email'
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control className='bg-slate-100 w-full' as="textarea" rows={3} placeholder='Message' />
              </Form.Group>
              <div className='flex justify-center'>
                <Button className='bg-red-400 outline-none border-none w-2/3 h-12 text-xl font-bold hover:bg-orange-600'>Send</Button>
              </div>

            </Form>
          </div>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default Contact