import '../components/Nav.css'
import { Link,NavLink } from 'react-router-dom';

function Nav() {
  
  return (
   <nav className='flex items-center justify-around pt-6 md 
   '>
    <Link to="/">
    <h1>LOGO</h1>
    </Link>
    <div className='navlinks items-center flex space-x-4 '>
    <NavLink to="#Header">Home</NavLink>
<NavLink to="#our-work" >Our Work</NavLink>
<NavLink to="#services" >Services</NavLink>
<NavLink to="#Packages" >Packages</NavLink>
<NavLink to="#testimonial" >Testimonial</NavLink>
<NavLink to="#Sign In" >Sign In</NavLink>
<div className='buttonarea'>
<button className='cursor-pointer hover:bg-sky-700'>Sign Up</button> </div>
</div>
   </nav>
  )

  }
export default Nav