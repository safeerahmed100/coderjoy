import React from 'react'
import Nav from './Nav'
import leftImg from '../assets/left.jpg';
import rightImg from '../assets/right.jpg';
import sLeftImg from '../assets/sLeft.jpg';
import srightImg from '../assets/sright.jpg';
import './Header.css'





function Header() {
  return (
    <div className='Header w-screen bg-center	bg-cover	'>
      <div className='HeaderBg'></div>
              <Nav />
        <div className='hero flex items-center space-x-2 
'>
        <img  className='leftImg side' src={leftImg} alt='left'/>    
        <img className='sLeftImg cen' src={sLeftImg} alt='sLeft' />
        <div  className='centerImg cen'> 
        <div className='blank'></div>
        <h1>Coder</h1>
        <h2>JOY</h2>
        <span>WEB AND APP  DEVELOPEMENT SERVICE</span><br/>
        <button>Subscribe</button>
         <div className='blank'></div>
        </div>  
        <img  className='sRightImg cen' src={srightImg} alt='right'/>    
        <img  className='rightImg side' src={rightImg} alt='right'/>    

        </div>
       </div>
  )
}

export default Header