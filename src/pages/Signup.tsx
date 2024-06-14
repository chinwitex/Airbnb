// import React from 'react'
import facbook from '../assets/Facebook.svg'
import googl from '../assets/Google.svg'
import apple from '../assets/Apple.svg'
import mail from '../assets/mail-01.svg'
import { XCircleIcon } from 'lucide-react'
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div className='w-[600px] ml-[350px] bg-slate-100 shadow-2xl pb-10 pt-7' >
        <section className='flex justify-between'>
            <XCircleIcon className='ml-4'/>
            <p className='font-bold mr-[40%] '>log in or sign up</p>
           
        </section>
        <hr  className='border-black w-full mt-4'/>
        <p className='text-xl font-extrabold ml-4 mb-6 mt-4 ml-10'>
            welcome to Airbnb
        </p>
        <form action="
        ">
          
            
        </form>
      <div className='relative'>
      
      
      <input type="email" placeholder='Email ' className='w-[85%] h-14 border-gray-700 border-2 grid justify-center ml-10 rounded-xl mb-7' />
      
    </div>
    
    
   
    <Link to='/finishig'> <button className='w-[85%] h-14 rounded-md font-semibold text-lg ml-10 bg-[#f9325b] text-white' >
      <p>Continue</p>
    </button></Link>

    
    <section className='flex w-[85%] ml-10 relative gap-1'>
      <span className='border-b-2 border-black w-[45%]  '></span>
      <p className='relative top-2'>or</p>
      <span className='border-b-2 border-black w-[45%] '></span>
    </section>
    <section className=' w-[85%] mt-7 font-bold ml-10 grid grid-rows-4 gap-5 '>
      <button className='w-full border-black border-2 h-10 rounded-lg'>
        <img src={facbook} alt="" className='relative top-2 left-3'/>
        <p className='relative bottom-3'>Continue with facebook</p>
      </button>
      <button className='w-full border-black border-2 h-10 rounded-lg'>
        <img src={googl} alt="" className='relative top-2 left-3'/>
      <p  className='relative bottom-3'> Continue with Google</p>
      </button>
      <button className='w-full border-black border-2 h-10 rounded-lg'>
        <img src={apple} alt="" className='relative top-2 left-3' />
        <p  className='relative bottom-3'>Continue with Apple</p>
      </button>
      <button className='w-full border-black border-2 h-10 rounded-lg'>
        <img src={mail} alt="" className='relative top-2 left-3'/>
        <p  className='relative bottom-3'>Continue with email</p>
      </button>
    </section>
 

    </div>
   
  )
}

export default Signup