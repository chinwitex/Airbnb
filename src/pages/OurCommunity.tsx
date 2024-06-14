// import React from 'react'
import airlogo from '../assets/Airbnbll-removebg-preview.png'
import { Link } from 'react-router-dom'

function OurCommunity() {
  return (
    <div className='w-[500px] ml-[400px] bg-slate-100 pb-10 pt-7'>
        <div className='ml-7'>
        <div className='h-[70px] w-[100px] ml-5'>
            <img src={airlogo} alt="" />
        </div>
        <p className='text-sm font-bold ml-5 mt-8 w-[85%]'>
            Our community commitment
        </p>
        <p className='ml-5 font-extrabold mt-8 w-[85%]'>
            Airbnb is a community where anyone can belong
        </p>
        <p className='ml-5 mt-8 w-[85%] '>To ensure this , we're asking you to commit the following:</p>

        <p className='w-[85%] ml-5 mt-7'>
            I agree to treat everyone in the Airbnb  community-regardless of their race, religion,nation,origin,ethnicity,skin color,disability,sex,gender,identity,sexual orientation or age-with respect, and without judgement or bias.
        </p>
        <p className='underline font-bold ml-5 mt-6 hover:cursor-pointer'>
            Learn more {'>'}
        </p>
        
      <Link to='/homein'><button className='w-[85%] h-14 rounded-md font-semibold text-lg ml-5 bg-[#f9325b] text-white my-5' >
      <p>Agree and Continue</p>
      </button></Link>
       
      <Link to='/signup'> <button className='w-[85%] h-14 rounded-md font-semibold text-lg ml-5 bg-white border-2 border-black text-black mt-5' >
      <p>Decline </p>
      </button></Link>
      
      
        </div>
    </div>
  )
}

export default OurCommunity