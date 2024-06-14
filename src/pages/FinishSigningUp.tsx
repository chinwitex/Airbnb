// import React from 'react'
import { Link } from 'react-router-dom'

function FinishSigningUp() {
  return (
    <div className='w-[600px] ml-[300px] bg-slate-100 pb-10 pt-7'>
       <section className='flex justify-between'>
       <p className='ml-4 font-extrabold' >
            {'<'}
        </p>
        <p className='font-bold mr-[40%] '>
            finish signing up

        </p>
       </section>
       <hr  className='border-black w-full mt-4'/>
       <form action="" className='mt-7'>
        <input type="text"  placeholder='First name'  className='w-[85%] h-14  border-gray-700 border-2 grid justify-center ml-10 rounded-t-xl font-semibold'/><input type="text"  placeholder='Last name' className='w-[85%] h-14 border-gray-700 border-2 grid justify-center ml-10 rounded-b-xl'/>
       </form>
       <p className='relative ml-10 text-sm mt-2'>
        Make sure it matches the name on your Government ID.
       </p>
       <input type="text" placeholder='Birthdate' className='w-[85%] h-14  border-gray-700 border-2 grid justify-center ml-10 rounded-xl font-semibold mt-7' />
       <p className='ml-10 text-sm mt-2 w-[85%]'>
        To sign up, you must be at least 18. your birthday won't be shared with other people who use Airbnb  
       </p>
       <input type="email" placeholder='Email' className='w-[85%] h-14  border-gray-700 border-2 grid justify-center ml-10 rounded-xl font-semibold mt-7' />
       <p className='ml-10 text-sm mt-2'>
        we'll email you trip confirmation and receipts.
       </p>
       <input type="password" placeholder='Password' className='w-[85%] h-14  border-gray-700 border-2 grid justify-center ml-10 rounded-xl font-semibold mt-7' />
       <p className='font-bold relative underline left-[83%] bottom-10 '>
        show
       </p>
       <p className='w-[85%] ml-10 text-sm'>
        By selecting <span className='font-semibold'>Agree and Continue,</span> I agree to Airbnb's <span className='text-blue-700 underline hover:cursor-pointer'>Terms of services,Payments Terms of Services </span>and <span className='text-blue-700 underline hover:cursor-pointer'>Nondiscrimination Policy</span> and acknowledge the <span className='text-blue-700 underline hover:cursor-pointer'>Privcy Policy</span>
       </p>
       
    <Link to='/community'><button className='w-[85%] h-14 rounded-md font-semibold text-lg ml-10 bg-[#f9325b] mt-7 text-white' >
      <p>Agree and Continue </p>
    </button></Link>


    </div>
  )
}

export default FinishSigningUp