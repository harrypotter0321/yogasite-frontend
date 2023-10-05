import React, { useEffect } from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import avatar from '../images/file.png';
import convertToBase64 from '../assets/helper/convert';
import { getPost, toPost } from '../services/allapis';
import toast, { Toaster } from 'react-hot-toast';
import Post from '../components/Post';
import './ToPost.css'



function ToPost() {
  const [image, setimage] = useState()
  const [heading, setHeading] = useState()
  const [content, setContent] = useState()
  const [posts, setPosts] = useState([])


  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0])
    console.log(base64);
    setimage(base64)
  }



  const uploadPost = async (e) => {
    e.preventDefault()
    try {
      // const headerconfig = {
      //   "Content-Type": "multipart/form-data"
      // }
      const data = {image,heading}
      console.log(data);
      const response = await toPost(data)
      if (response.status === 200) {
        toast.success(response.data)
        setTimeout(() => {
          window.location.reload(false);
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }

  }



  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    const response = await getPost()
    console.log(response.data);
    setPosts(response.data)
    console.log(posts.content);
  }


  return (
    <>
      <div>
        Admin page
        <h2>Add posts</h2>
        <Form className='post' onSubmit={uploadPost}>
          <div className='postimg'>
            <img src={image || avatar} alt="" />

            <Form.Control type="file" label="image" accept='.jpeg, .png, .jpg' id="upload" name="img" onChange={onUpload} />
            <Form.Label htmlFor="upload">Upload</Form.Label>
          </div>
          <div className='post-heading'>
            <Form.Label htmlFor="heading">Heading <span className='star'>&#42; </span> </Form.Label>
            <Form.Control value={heading} onChange={e => setHeading(e.target.value)} type="text" id='heading' required />
          </div>
          <div className='post-content'>
            <Form.Label htmlFor="heading">Content <span className='star'>&#42; </span> </Form.Label>
            <Form.Control value={content} onChange={e => setContent(e.target.value)} type="text" id='heading' required />
          </div>
          <div className='post-button'>
            <button>Submit</button>
          </div>


        </Form>
        <Toaster />
        <div className='post-container'>
          {
            posts?.map(post => (
              <Post id={post._id} image={post.image} heading={post.heading} content={post.content} />
            ))
          }
        </div>



      </div>
    </>
  )
}


export default ToPost