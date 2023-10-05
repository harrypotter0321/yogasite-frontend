import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import yogamw from '../images/yogamw.png'
import { GoDotFill } from "react-icons/go";
import {BsFillCalendarDateFill} from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
import yogakids from '../images/yogakids.jpg'
import yoga from '../images/yoga.jpg'
import yogasun from '../images/yogasun.jpg'



function Classes() {

    const classDetails=[
        {title:'Yoga Classes for Men & Women', description:['Weight loss yoga','Stress relief yoga','Breathing exercise','Kriyas for healthy life','Open air yoga practices','Strength & Conditioning yoga'],url:yogamw,date:'Mon to Fri' ,time:'5 am to 6 am' },
        {title:'Yoga Classes for kids', description:['Gymnastic yoga ','Artistic yoga','Rythmic Yoga','Memory power yoga','Breathing exercises','Strengthening yoga'],url:yogakids, date:'Mon to Fri',time:'5 am to 6 am' },
        {title:'Saturday & Sunday Session ', description:['Traditional Yoga','Gymnastic Yoga','Artistic Yoga','Rythmic yoga','Rope yoga','Strengthening Yoga'],url:yogasun, date:'Sat to Sun', time:'4 Pm to 5 Pm' },
        {title:'Saturday & Sunday Session ', description:['Sports yoga','Advanced yoga','Gymnastic Yoga','Artistic yoga','Rythmic yoga','Weight loss yoga','Stress relief yoga','Breathing exercise','Kriyas for healthy life','Open air yoga practices'],url:yoga, date:'Mon to Fri', time:'5 Pm to 8.30 am' },
    ]

  return (
    <>
        <Navbar/>
        <div  className=' mt-20 bg-slate-500 h-20 flex items-center justify-center'>
            <h4 className=' text-2xl font-bold'>CLASS DETAILS</h4>
        </div>

        <div className='mt-10 pb-3 mx-5 bg-slate-100 shadow-2xl shadow-slate-400 w-11/12 gap-4  flex flex-wrap justify-center'>

        
        {
            classDetails?.map((clas=>(
                <div className= 'w-1/4 mt-3 shadow-2xl shadow-slate-400'>
                    <img className=' h-52 w-full'  src={clas.url} alt="" /> 
                    <h4 className=' text-red-700 text-2xl h-20 font-bold text-center'>{clas.title}</h4>
                    <ul className=' pb-3'>
                    {
                        clas.description?.map(desc=>(
                            
                                <li className=' px-8 text-md font-bold flex items-center'> <GoDotFill className='mr-3'/> {desc}</li>
                            
                        ))
                    }
                        </ul>
                    <div className=' justify-center pb-2 flex gap-4'>
                        <div className='flex justify-center items-center'>
                            <BsFillCalendarDateFill className='mr-2 text-xl text-orange-500'/>
                            <p className=' font-bold'>{clas.date}</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <BiSolidTimeFive className='mr-2 text-xl  text-orange-500'/>
                            <p className=' font-bold'>{clas.time}</p>
                        </div>
                    </div>    
                </div>
            )))
        }
    </div>

        <Footer/>
    </>
  )
}

export default Classes