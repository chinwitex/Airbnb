// import React from 'react'
import { MenuIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function DropdownwhenLogin() {
  return (
    <div>
         <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="">
    <MenuIcon className='relative '/>

  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 relative right-1 font-semibold">
  <Link to='/opps'><li><a>messages</a></li></Link>
  <Link to='/opps'><li><a>Trips</a></li></Link>
  <Link to='/opps'>  <li><a>Wishlist</a></li></Link>
  <hr />
  <Link to='/opps'> <li><a>Manage listings</a></li></Link>
  <Link to='/opps'> <li><a>Account</a></li></Link>
  <hr />
  <Link to='/opps'>  <li><a>Help Center</a></li></Link>
  <Link to='/logout'> <li><a>Log Out</a></li></Link>
    
  </ul>
</div>
    </div>
  )
}

export default DropdownwhenLogin