import React from 'react'
import mensyoga from '../images/mensyoga.jpg'
import kidsyoga from '../images/kidsyoga.png'
import { useNavigate } from 'react-router-dom'


function Classcard() {

  const navigate= useNavigate()

  const gotoClass=()=>{
    setTimeout(() => {
      navigate('/classes')
    }, 500);
    
  }

  return (
    <>
      <div className='flex justify-center  h-80'>
        <div className='w-2/5 shadow-2xl shadow-slate-950 rounded-s-2xl' dir="ltr">
          <img className='w-full h-full rounded-s-2xl' src={mensyoga} alt="" />
        </div>
        <div className='w-2/5 z-10 shadow-xl shadow-slate-400  cursor-pointer hover:bg-slate-200 hover:delay-200 bg-slate-100 ' >
          <h5 className=' text-center text-3xl pt-4 font-bold'>Yoga  classes for</h5>
          <p className=' text-center  text-xl font-bold  text-red-900'>Men & Women</p>
          <ul className=' text-justify mt-4 ml-16'>
            <li className=' text-lg font-bold'><span className='text-xl mr-4'>&#8226;</span>Weight loss yoga</li>
            <li className=' text-lg font-bold'><span className='text-xl mr-4'>&#8226;</span>Stress relief yoga</li>
            <li className=' text-lg font-bold'><span className='text-x mr-4'>&#8226;</span>Breathing exercise</li>
            <li className=' text-lg font-bold'><span className='text-xl mr-4'>&#8226;</span>Kriyas for healthy life</li>
            <li className=' text-lg font-bold'><span className='text-xl mr-4'>&#8226;</span>Open air yoga practices</li>
            <li className=' text-lg font-bold'><span className='text-xl mr-4'>&#8226;</span>Strength & Conditioning yoga</li>
          </ul>
        </div>
      </div>


      {/* class button */}
      <div className='flex justify-center  h-20'>
        <button onClick={gotoClass}  className="bg-blue-500 mt-4 shadow-2xl shadow-blue-600 hover:bg-red-500 hover:shadow-red-600 h-12 text-white font-bold py-2 px-4 rounded-full">About Class</button>
      </div>


      <div className='flex  justify-center mt-4  h-80'>
        <div className='w-2/5 shadow-xl z-10 shadow-slate-400 cursor-pointer hover:bg-slate-200 hover:delay-200 bg-slate-100 ' >
          <h5 className=' text-center text-3xl pt-4 font-bold'>Yoga  classes for</h5>
          <p className=' text-center  text-xl font-bold  text-red-900'>Kids</p>
          <ul className=' text-justify mt-4 ml-16'>
            <li className=' text-lg font-bold'><span className='text-xl mr-4'>&#8226;</span>Gymnastic yoga </li>
            <li className=' text-lg font-bold'><span className='text-xl mr-4'>&#8226;</span>Artistic yoga</li>
            <li className=' text-lg font-bold'><span className='text-x mr-4'>&#8226;</span>Rythmic Yoga</li>
            <li className=' text-lg font-bold'><span className='text-xl mr-4'>&#8226;</span>Memory power yoga</li>
            <li className=' text-lg font-bold'><span className='text-xl mr-4'>&#8226;</span>Breathing exercises</li>
            <li className=' text-lg font-bold'><span className='text-xl mr-4'>&#8226;</span>Strengthening yoga</li>
          </ul>
        </div>
        <div className='w-2/5 shadow-2xl shadow-slate-950 rounded-s-2xl' dir="rtl">
          <img className='w-full h-full rounded-s-2xl' src={mensyoga} alt="" />
        </div>

      </div>

    </>

  )
}

export default Classcard