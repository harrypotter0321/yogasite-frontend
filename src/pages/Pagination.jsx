import React from 'react'

const Pagination = ({totalPosts,postPerPage,paginate}) => {
    let pages=[]

    for(let i= 1; i <= Math.ceil(totalPosts/postPerPage) ; i++ ){
        pages.push(i)
    }

  return (
    <nav className='flex justify-center pt-1'>
        <ul className='pagination '>
        {
            pages.map(number=>(
                <li key={number} className='page-item '>
                    <a onClick={()=> paginate(number)} href='#' className='page-link bg-slate-800 text-red-300 text-xl'>
                        {number}
                    </a>
                </li>
            ))
        }  
        </ul>
         
    </nav>
  )
}

export default Pagination