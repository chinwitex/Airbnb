// import React from 'react'
import logo from '../assets/Airbnbll-removebg-preview.png'

function Logo() {
  return (
    <div className='flex gap-4'>
     <section className='h-[60px] w-[120px]'>
        <img src={logo} alt=""  className='w-full h-full '/>
     </section>
     <p className='text-red-400 text-2xl font-bold mt-3 ml-0 relative right-10'>airbnb</p>
     
     
    </div>
  )
}

export default Logo