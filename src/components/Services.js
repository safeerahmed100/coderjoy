import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Services.css'
import sliderContent from './Content';


function Services({pic}) {
  return (
    <div className='Services'>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
        {sliderContent.map((text)=>(
      <SwiperSlide className='slide1' style={{background:'Black'}}>
        <div className='slider-first'>
            <div className='slider-text'>
                <h4>{text.heading}</h4>
                <h1>{text.service}</h1>
                <p>{text.para}</p>
        </div>
        <div className="slider-img">
            <img className='slider-img' src={text.pic} alt='laptop' />
        </div>
        </div>
      </SwiperSlide>
  ))}      
    </Swiper>

    </div>
  )
}

export default Services