import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Post.css'


function Post() {

  const postbuttons = [
    { link: 'posting', button: 'Add post' },
    { link: 'viewpost', button: 'View post' },
    { link: 'editpost', button: 'Edit post' }
  ]

  return (
    <div>
      <div className='mt-20 flex gap-2 bg-slate-200 justify-center'>
        {
          postbuttons?.map((posts => (
            <div className=" h-14 py-2 w-1/6 "> <Link to={posts.link}>
              <button className='w-full text-2xl font-bold text-white rounded-full h-full bg-blue-600 cursor-pointer'>{posts.button}</button>
            </Link></div>
          )))
        }

      </div>
      <div>
        <Outlet />
      </div>
    </div>

  )
}

export default Post