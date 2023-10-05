import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import { getClass, getPost } from '../services/allapis'
import Imageslider from '../components/Imageslider'
import profile from '../images/profilewall.png'
import yogalogo from '../images/Yogalogo.png'
import Classcard from '../components/Classcard'
import Getpost from '../components/Getpost'
import iaa from '../images/logos/iaa.png'
import iaf from '../images/logos/iaf.png'
import nwr from '../images/logos/nwr.png'
import tyf from '../images/logos/tyf.png'
import waf from '../images/logos/waf.png'
import sai from '../images/logos/sai.png'
import Footer from '../components/Footer'
import spinner from '../images/spinner.gif'



function Home() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)


  const getPosts = async () => {
    setLoading(true)
    const response = await getPost()
    console.log(response.data);
    setPosts(response.data)
    setLoading(false)
  }
  useEffect(() => {

    getPosts()


  }, [])

  const slides = [
    { url: "https://c4.wallpaperflare.com/wallpaper/59/97/72/design-sofa-furniture-watch-wallpaper-preview.jpg", title: 'furniture' },
    { url: "https://w0.peakpx.com/wallpaper/379/868/HD-wallpaper-black-and-white-decor-rug-lamp-window-books-plant-black-vase-silver-bed-furniture-tree-flowers-mirror-reflection-white.jpg", title: 'furniture' },
    { url: "https://c4.wallpaperflare.com/wallpaper/215/944/975/warm-and-modern-living-room-living-room-set-wallpaper-preview.jpg", title: 'furniture' },
    { url: "https://images6.alphacoders.com/125/1257448.jpg", title: 'furniture' },
    { url: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg", title: 'furniture' },
  ]

  const logos = [
    { url: iaa },
    { url: iaf },
    { url: nwr },
    { url: sai },
    { url: tyf },
    { url: waf },
  ]

  return (
    <div>
      <div style={{ padding: '0px' }} className='navbar' >
        {/*navbar*/}
        <Navbar />
      </div>
      {/* profile */}
      <div className='profile'>
        <img src={profile} alt="" />
        <div className='profile-text'>
          <h4>Mr.T.GOWTHAM</h4>
          <h5>International Yoga Trainer</h5>
        </div>
      </div>
      {/* title */}
      <div className='title'>
        <img src={yogalogo} alt="" />
        <h4>GOWTHAM'S YOGALAYAM</h4>
      </div>

      {/* carousel */}
      <div className='carousel-container'>
        <div className='carousel'>
          <Imageslider slides={slides} />
        </div>
      </div>

      {/* class overview */}

      <div className='classcard '>
        <Classcard />

      </div>

      {/* POST SECTION */}
      <h5 className='text-red-800 text-center text-3xl mt-20  font-bold'>Latest Update</h5>
      <div className='flex flex-col items-center mt-4 '>


        {
          loading ? (
            <img src={spinner} alt="" />

          ) : (
            <div className='grid grid-cols-3 gap-3  bg-slate-200 p-9'>
              {
                posts?.map((post) => (
                  <Getpost heading={post.heading} content={post.content} url={post.image} />
                ))
              }
            </div>
          )
        }



      </div>

      {/* logos */}

      <div className='flex mt-8  justify-around pl-10 pr-10'>
        {
          logos?.map((logo) => (
            <img src={logo.url} className=' h-28 w-28' alt="logo" />
          ))
        }
      </div>

      {/* footer */}

      <div>
        <Footer />
      </div>


    </div>

  )
}

export default Home