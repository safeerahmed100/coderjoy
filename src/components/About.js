import React from 'react'
import './About.css'
import BackgroundImg from '../assets/sRig.jpg'
import handImg from '../assets/hand-removebg-preview.png'

function About() {
  return (
    <div className='cont'>
    <div className='About'>
        <div className='image-area'>
            <div className="background-img-bg"> 
            <img  className="background-img" src={BackgroundImg} alt='bgim'/>
            </div>
            
        </div>
        <div className='text-area'>
            <h5>Why ?</h5>
            <h1>Coder<span style={{color:'#E43554',fontSize:'130px',fontWeight:700,textAlign:'left'}}>joy</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
            <button>Subscribe</button>
        </div>
    </div>
    <img className="hand-img animate-bounce"src={handImg} alt='handim' />

        </div>
  )
}

export default About