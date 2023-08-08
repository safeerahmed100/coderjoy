import '../components/Nav.css'

function Nav() {
  
  return (
   <nav className='flex items-center justify-around pt-6 md'>
      <a href="/"> 
    <h1>LOGO</h1>
    </a>
    
    <div className='navlinks items-center flex space-x-4 '>
    <a href="/Header"> Home </a>
    <a href="/Header"> Our Work </a>
    <a href="/Header"> Services </a>
    <a href="/Header"> Packages </a>
    <a href="/Header"> Testimonial </a>
    <a href="/Header"> Sign In </a>

<div className='buttonarea'>
<button className='cursor-pointer hover:bg-sky-700'>Sign Up</button> </div>
</div>
   </nav>
  )

  }
export default Nav