import React from 'react'
import './achivement.css'
import Navbar from '../components/Navbar'
import nationalyogaicon from '../images/medals/nationalyogaicon.png'
import Worldyoga from '../images/medals/Worldyoga.png'
import Footer from '../components/Footer'


function StudentAch() {

    const achivements= [
        {url:nationalyogaicon , title:"Ten of you our Students got  Selected for the National Yogasana Sports Championship and Won 3 - Silver and   4 - Bronze Medals held at Haryana 2022" },
        {url:Worldyoga , title:"Five of our Students got Selected for International Yogasana Sports Championship and achived 6- Gold Silver and 5-Bronze Medals held at Thailand 2023" },
        {url:Worldyoga , title:"Ten of our Students got Selected for World Chamionship going to held at Uttarakhand" },
        {url:nationalyogaicon , title:"Fifteen of our Students got Selected forNational Yogasana Sports Championship going to held at Goa" },
        {url:Worldyoga , title:"Five of our Womens Team (Age above 40) have got Selected for World Chamionship going to held at Uttarakhand"},
    ]

  return (
    <>
    <Navbar/>

    <div  className=' mt-20 bg-slate-500 h-20 flex items-center justify-center'>
            <h4 className=' text-2xl font-bold '>STUDENTS ACHIEVEMENTS</h4>
        </div>
        <div className='achive-body-student grid grid-cols-2 px-32  py-16 pr-32 gap-3'>
            {
                achivements?.map(achive=>(
                    <div className=' w-90 flex justify-center cursor-pointer items-center shadow-xl shadow-slate-400 p-9 rounded-lg hover:shadow-slate-600 hover:bg-slate-200  h-28 bg-white '>
                        <div className=' w-1/6 flex justify-center items-center'>
                        <img className=' shadow-xl shadow-slate-400 w-14' src={achive.url} alt="" /> 
                        </div>
                       
                        <div className='w-5/6'>
                        <h3 className=' text-lg font-semibold leading-6'>{achive.title}</h3>
                        </div>
                       
                    </div>
                ))
            }
        </div>

        <Footer/>
    </>
  )
}

export default StudentAch