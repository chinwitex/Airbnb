// import React from 'react'
import {  MenuIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function Dropdown() {
  return (
    <>
    <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="">
    <MenuIcon className='relative '/>

  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 relative right-1">
   <Link to='/login'><li><a>Log In</a></li></Link>
   <Link to='/signup'><li><a>Sign Up</a></li></Link>
    
    <hr/>
   <Link to='/opps'><li><a>Airbnb Your Home</a></li></Link>
   <Link to='/opps'><li><a>Help Centre</a></li></Link>
    
    
    
  </ul>
</div>
    </>
  )
}

export default Dropdown