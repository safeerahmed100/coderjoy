import React, { useState } from 'react'
import Nav from './Nav'
import Img1 from '../assets/left.jpg';
import Img2 from '../assets/right.jpg';
import Img3 from '../assets/sLeft.jpg';
import Img4 from '../assets/sright.jpg';
import './Header.css'





function Header() {
  const [activeCircle,setActiveCircle]=useState(1);
  const [switchImage,setSwitchImage]=useState(false);


  const handleButtonClick = () => {
    console.log("working hai jan")
    setSwitchImage(prevState => !prevState);
  };

  function handlePagination(index){
    setActiveCircle(index)
  }
    const centerImages= [Img1, Img2,Img3,Img4];
  return (
    <div className='Header w-screen bg-center	bg-cover	'>
      <div className='HeaderBg'></div>
              <Nav />
        <div className='hero flex items-center space-x-2  '>
        <img  className={`leftImg side ${switchImage ? 'switchSideRight' : 'centerImageToRight'}`} src={centerImages[activeCircle]} alt='left' /> 
        <i  onClick={handleButtonClick} className=' cursor-pointer bi bi-arrow-up-circle-fill animate-bounce toggle absolute bottom-20 left-36  '></i>   
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
        <i onClick={handleButtonClick} className='cursor-pointer bi bi-arrow-down-circle-fill  animate-bounce toggle absolute top-20 right-40  '></i>    
        <img  className={`rightImg side ${switchImage ? 'switchSideLeft' : 'centerImageToLeft'}`} src={centerImages[activeCircle -3]} alt='right'/>    

        </div>
        <div className='paginations'>
        <span onClick={()=>handlePagination(1)} className={`circle  ${ activeCircle===1? 'activePag' :''}`}></span>
          <span onClick={()=>handlePagination(2)} className={`circle  ${ activeCircle===2? 'activePag' :''}`}></span>
         <span onClick={()=>handlePagination(3)} className={`circle ${ activeCircle===3? 'activePag' :''}`}></span>
         <span onClick={()=>handlePagination(4)} className={`circle ${ activeCircle===4? 'activePag' :''}`}></span>

        </div>
       </div>
  )
  

}

export default Header