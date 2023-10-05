import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ceo from '../images/medals/ceo.png'
import coach from '../images/medals/coach.png'
import gold from '../images/medals/gold.png'
import graduate from '../images/medals/graduate.png'
import teachers from '../images/medals/teachers.png'
import './achivement.css'


function Myachievement() {

    const achivements= [
        {url:gold , title:"Won 15 medals in national and International from the year 2010 to 2022" },
        {url:coach , title:"Tamilnadu State team Coach from 2022 to 2023" },
        {url:teachers , title:"Completed Teacher Training course in Sports Yoga" },
        {url:ceo , title:"Organizing Secretary of Indian Yogasana Sports Federation (IYSF)" },
        {url:graduate , title:"Completed NSNIS Diploma Course with 1st National Ranking" },
        {url:coach , title:"Indian team assistant coach from 2022 to 2023" },
    ]

    

  return (
    <>
        <Navbar/>
        
        <div  className=' mt-20 bg-slate-500 h-20 flex items-center justify-center'>
            <h4 className=' text-2xl font-bold'>ACHIEVEMENT & AWARDS</h4>
        </div>
        <div className='achive-body grid grid-cols-2 px-32  py-16 pr-32 gap-3'>
            {
                achivements?.map(achive=>(
                    <div className=' w-90 flex justify-center cursor-pointer items-center shadow-xl shadow-slate-400 p-9 rounded-lg hover:shadow-slate-600 hover:bg-slate-200  h-20 bg-white '>
                        <div className=' w-1/6 flex justify-center items-center'>
                        <img className=' shadow-xl shadow-slate-400 w-10' src={achive.url} alt="" /> 
                        </div>
                       
                        <div className='w-5/6'>
                        <h3 className=' text-xl font-semibold'>{achive.title}</h3>
                        </div>
                       
                    </div>
                ))
            }
        </div>

        <Footer/>
        
        
    </>
  )
}

export default Myachievement