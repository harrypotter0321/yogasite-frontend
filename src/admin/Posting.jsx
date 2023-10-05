import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import avatar from '../images/file.png'
import './Posting.css'
import convertToBase64 from '../assets/helper/convert';
import toast, { Toaster } from 'react-hot-toast';
import { toPost } from '../services/allapis';


function Posting() {

    const [image, setimage] = useState()
    const [heading, setHeading] = useState()
    const [content, setContent] = useState()

    const onUpload = async (e) => {
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
            }, 1000);
          }
        } catch (error) {
          console.log(error);
        }
    
      }  

  return (
    < >
        <Form className='posts' onSubmit={uploadPost}>
          <div className='postimg'>
            
            <Form.Control type="file" label="image" accept='.jpeg, .png, .jpg' id="upload" name="img" onChange={onUpload} />
            <Form.Label htmlFor="upload"><img  src={image || avatar} alt="" /></Form.Label>
          </div>
          <div className='post'>
          <div className='post-heading'>
            <Form.Label htmlFor="heading">Title <span className='star'>&#42; </span> </Form.Label>
            <Form.Control value={heading} onChange={e => setHeading(e.target.value)} as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }} id='heading' required />
          </div>
          <div className='post-button'>
            <button>Submit</button>
          </div>
          </div>
          <Toaster />
        </Form>
    </>
  )
}

export default Posting