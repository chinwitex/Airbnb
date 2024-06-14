// import React from 'react'
import { Link } from 'react-router-dom'

function Areyousure() {
  return (
    <div className='bg-gray-50 w-[100vw] h-[100vh]'>
        <div className='w-[400px] ml-[450px] mt-[200px]  bg-white shadow-2xl rounded-md'>
            <p className='font-extrabold text-2xl'>
                Are you sure you want to log out?
            </p>
            <section className='flex justify-around font-bold text-2xl mt-28 mb-6'>
                <Link to='/'><p className='bg-white shadow-2xl text-red-600'>YES</p></Link>
                <Link to='/homein'><p  className='bg-white shadow-2xl'>NO</p></Link>
                
                
            </section>
        </div>
    </div>
  )
}

export default Areyousure