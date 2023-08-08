import workImage from '../assets/work.png';
import SliderImg1 from '../assets/sliderimg1.jpg';
import SliderImg2 from '../assets/sliderimg2.jpg';
import SliderImg3 from '../assets/mboill.jpg';
import SliderImg4 from '../assets/left.jpg'
import SliderImg5 from '../assets/right.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';


import './Work.css';

function Work() {
const sliderImages = [SliderImg1,SliderImg2,SliderImg3,SliderImg4,SliderImg5];
  return (
    <div className='Work'>
      <div className='container'>
        <div className='image-box'>
          <img src={workImage} className='animate-bounce' alt='work' />
        </div>
        <div className='text-box'>
          <span>our work</span>
          <h1>lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
            Scelerisque duis ultrices sollicitudin
          </p>
          <button>Learn more</button>
        </div>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
     >
               <div className='slider'>

          {sliderImages.map((imgSrc) => (
            
             <SwiperSlide>
         <img key={imgSrc} src={imgSrc} className='sliderimg' alt='sliderImages'/>
            </SwiperSlide>

          ))}
                  </div>

          </Swiper>
      </div>
      </div>
  );
}

export default Work;
