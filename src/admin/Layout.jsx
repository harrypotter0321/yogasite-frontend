import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function Layout() {
    const [admin,setadmin]= useState(true)
    const options=[{name:"Menu",link:"/layout"},
    {name:"Post",link:"post"},
]
  return (
    <>
    <Navbar admin={admin} />
      <div className='w-screen h-screen flex '>
          <div className='bg-slate-300 flex flex-col  pt-24 w-1/5 h-full'>

            {
              options?.map((option=>(
                  <Link to={option.link} ><div className='h-10 flex items-center w-full cursor-pointer  hover:bg-red-800'> <h5 className='text-black h-full w-full hover:text-slate-100  px-6 font-bold text-xl'> {option.name}</h5>  </div> </Link>
              )))
            }
            
            
            
            <div className='flex justify-center bottom-5 pl-4 fixed'>
                <Button className='bg-red-400 outline-none w-fit border-none  h-10 text-xl font-bold hover:bg-orange-600'>Logout</Button>
              </div>
          
          </div>
          <div  className="w-full">
            <Outlet/>
          </div>
      </div>
    </>
  )
}

export default Layout