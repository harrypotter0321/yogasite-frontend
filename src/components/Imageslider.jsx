import React, { useState } from 'react'
import './Imageslider.css'
import left from '../images/icons/left.svg'
import right from '../images/icons/right.svg'

function Imageslider({slides}) {
    const [currentIndex, setCurrentIndex]=useState(0)

    // carousel
    const sliderStyles={
        height:'100%', 
        position:'relative',
        overflowY:'hidden',
        paddingBottom:'20px'
    }
    const SlideStyle={
        width:'100%',
        height:'90%',
        borderRadius:'10px',
        backgroundImage:`url(${slides[currentIndex].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover'

    }
    const leftArrowStyle={
        position:'absolute',
        top:'45%',
        transform: 'translate(0, -50%)',
        left:'32px',
        width:'70px',
        color:'orange',
        zIndex:1,
        cursor:'pointer'
    }
    const rightArrowStyle={
        position:'absolute',
        top:'45%',
        transform: 'translate(0, -50%)',
        width:'70px',
        right:'32px',
        color:'#fff',
        fontSize:'70px',
        zIndex:1,
        cursor:'pointer'
    }
    const goToPrev= ()=>{
        const isFirstSlide= currentIndex===0
        const newIndex= isFirstSlide ? slides.length -1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToNext= ()=>{
        const isLastSlide= currentIndex === slides.length -1  
        const newIndex= isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex)
    }

    const dotsContainerStyle={
        display:'flex',
        justifyContent:'center',
        marginTop:'10px',
        position:'absolute',
        left:'31%',
        bottom:'50px'
    }

    const dotSyles={
        margin:'0 3px',
        cursor:'pointer',
        width:'100px',
        height:'70px',
        backgroundImage:`url(${slides.url})`,
        backgroundPosition:'center',
        backgroundSize:'cover'
    }

  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyle} onClick={goToPrev}><img className='arrows' src={left} alt="" />  </div>
        <div style={rightArrowStyle} onClick={goToNext}><img className='arrows' src={right} alt="" /></div>
        <div style={SlideStyle}>
        <div style={dotsContainerStyle}>
            {slides.map((slides,slideIndex)=>(
                <div  className='slideimage' key={slideIndex} style={dotSyles} onClick={()=> goToSlide(slideIndex)}>
                    <img src={slides.url} alt="" />
                </div>
            ))}
        </div>
        </div>
        
    </div>
  )
}

export default Imageslider