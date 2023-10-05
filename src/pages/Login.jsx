import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Button } from 'react-bootstrap'
import loginbg from '../images/wallpaper/loginbg.png'
import { useNavigate } from 'react-router-dom'


function Login() {
  const navigate= useNavigate()

  const [admin,setAdmin] = useState(true)
  const [login,setLogin] =useState(true)

  const submited= ()=>{
    if(login){
      navigate('/layout')
    }
  }

  return (
    <div>
    <Navbar admin={admin}/>
    <div className=' h-screen flex justify-center items-center'>
      <div className=' bg-slate-200 w-4/5 h-4/5 mt-5 flex shadow-xl shadow-slate-400'>
        <div style={{backgroundImage:`url(${loginbg})`,backgroundSize:'cover'}} className=' bg-red-600 w-2/5 h-full'>

        </div>
        <div className='flex w-3/5 h-full justify-center flex-col'>
            <div className='flex items-center h-20 justify-center'>
            <h1 className=' text-3xl font-bold text-slate-700'>Login</h1>
            </div>
            <div className='flex flex-col gap-3 w-full items-center'>
              <input className='w-3/4 h-14 rounded-lg' type="text" placeholder=' Username'/>
              <input className='w-3/4 h-14 rounded-lg' type="password" placeholder=' Password' />

            </div>
           <div className='flex justify-center mt-4'>
                <Button onClick={submited} className='bg-red-400 outline-none border-none w-1/3 h-12 text-xl font-bold hover:bg-orange-600'>Send</Button>
              </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Login