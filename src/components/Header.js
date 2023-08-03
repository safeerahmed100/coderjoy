import React, { useState } from 'react'
import Nav from './Nav'
import leftImg from '../assets/left.jpg';
import rightImg from '../assets/right.jpg';
import Img1 from '../assets/sLeft.jpg';
import Img2 from '../assets/sright.jpg';
import './Header.css'





function Header() {
  const [changeImg,setChangeImg]=useState(leftImg);
  const [activeCircle,setActiveCircle]=useState(1);

  function handlePagination(index){
    setActiveCircle(index)
  }

  function handleImg(){
    setChangeImg(prevImg => (prevImg === leftImg ? rightImg : leftImg));  }
  
    const centerImages= [Img1, Img2];
  return (
    <div className='Header w-screen bg-center	bg-cover	'>
      <div className='HeaderBg'></div>
              <Nav />
        <div className='hero flex items-center space-x-2  '>
        <img  className="	 leftImg side" src={`${changeImg}`} alt='left' /> 
        <i onClick={handleImg} className=' cursor-pointer bi bi-arrow-up-circle-fill animate-bounce toggle absolute bottom-20 left-36  '></i>   
        <img className='sLeftImg cen' src={centerImages[activeCircle -1]} alt='sLeft' />
        <div  className='centerImg cen'> 
        <div className='blank'></div>
        <h1>Coder</h1>
        <h2>JOY</h2>
        <span>WEB AND APP  DEVELOPEMENT SERVICE</span><br/>
        <button>Subscribe</button>
         <div className='blank'></div>
        </div>  
        <img  className='sRightImg cen' src={centerImages[activeCircle-2]} alt='right'/>   
        <i onClick={handleImg} className='cursor-pointer bi bi-arrow-down-circle-fill  animate-bounce toggle absolute top-20 right-40  '></i>    
        <img  className=" transition-opacity	 rightImg side"  src={`${changeImg=== rightImg? leftImg : rightImg}`} alt='right'/>    

        </div>
        <div className='paginations'>
        <span onClick={()=>handlePagination(1)} className={`circle  ${ activeCircle===1? 'activePag' :''}`}></span>
          <span onClick={()=>handlePagination(2)} className={`circle  ${ activeCircle===2? 'activePag' :''}`}></span>
         <span onClick={()=>handlePagination(3)} className={`circle ${ activeCircle===3? 'activePag' :''}`}></span>

        </div>
       </div>
  )
  

}

export default Header