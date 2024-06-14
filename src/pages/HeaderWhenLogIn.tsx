// import React from 'react'
import Logo from '../components/Logo'
import { SearchIcon,GlobeIcon,UserCheckIcon } from 'lucide-react'
import DropdownwhenLogin from '../components/DropdownwhenLogin'
import List from '../components/List'
import { Link } from 'react-router-dom'


function HeaderWhenLogIn() {
  return (
    <div>
      <section className='flex justify-around  pt-6'>
      <Logo />
      <form action="" className='relative'>
        <input type="text"  className='input file-input-sm w-[35vw] h-[50px] border-black rounded-2xl'/>
        <div className='absolute bg-red-500 rounded-full hover:cursor-pointer top-[12px] left-[30vw] h-8 w-8 flex justify-center justify-items-center'>
        <Link to="/opps"> <a href=""> <SearchIcon className='text-white pt-2 font-extrabold' /></a></Link>
        </div>
       <div className='font-semibold'>
       <p className=' absolute top-4 left-[2vw]'>Anywhere |</p>
        <p className=' absolute top-4 left-[10vw]'>Any week |</p>
        <p className=' absolute top-4 left-[18vw] text-gray-400'>Add guest</p>
       </div>
      </form>

      <div className='flex gap-7'>
        <p className='font-semibold'>airbnb your home</p>
        <GlobeIcon/>
        <div className='flex gap-4 border-gray-500 h-8  justify-center  border-2 rounded-3xl '>
          <DropdownwhenLogin/>
          <UserCheckIcon/>
        </div>

      </div>
      </section>
      <hr className='mt-9'/>
      <List/>

      
    </div>
  )
}

export default HeaderWhenLogIn