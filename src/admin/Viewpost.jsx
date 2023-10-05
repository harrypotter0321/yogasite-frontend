import React, { useEffect, useState } from 'react'
import avatar from '../images/file.png'
import './Viewpost.css'
import { getPost } from '../services/allapis'
import Pagination from '../pages/Pagination'
import PostAdmin from './PostAdmin'





function Viewpost() {

  const [posts,setPosts] = useState([])
  const [Loading, setLoading] =  useState(false)
  const [id,setId]= useState(true)
  
  // pagination
  const [currentPage, setCurrentPage]= useState(1)
  const [postPerpage] = useState(8)

  const indexOfLastPost= currentPage * postPerpage
  const indexOfFirstPost= indexOfLastPost - postPerpage
  const currentPost = posts.slice(indexOfFirstPost,indexOfLastPost) 

  const paginate= (pagenumber) => setCurrentPage(pagenumber)

  useEffect(()=>{
    getpost()
  },[])

  const getpost=async () =>{
    setLoading(true)
    const response = await getPost()
    console.log(response.data);
    setPosts(response.data)
    setLoading(false)
  }

  return (
    <>
      <div className='m-0'>
            <PostAdmin post={currentPost} loading={Loading} />
            <Pagination postPerPage={postPerpage} totalPosts={posts.length} paginate={paginate} />
        
      </div>

    </>
  )
}

export default Viewpost