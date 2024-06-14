// import React from 'react'
import Footertwo from './Footertwo';
import { GlobeIcon,PoundSterling,FacebookIcon,TwitterIcon,InstagramIcon,MapIcon } from 'lucide-react';

function Footer() {
    const lists=[
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Flat rentals"},
        { top:"Aberfeldy",down:"Villa rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"},
        { top:"Aberfeldy",down:"Holiday rentals"}
    ];
  return (
   <>
    <div className='bg-gray-200'>
    <div className='ml-[50%] translate-x-[-80%] mt-6 '>
        <p className='font-bold'>Inspirtion for future getaways </p>
        <ul className='flex gap-6 font-semibold mt-2 w-[60vw]'>
            <li className='hover:underline'>Popular</li>
            <li className='hover:underline'>Historic</li>
            <li className='hover:underline'>Coastal</li>
            <li className='hover:underline'>Island</li>
            <li className='hover:underline'>Lakes</li>
            <li className='hover:underline'>Unique stays</li>
            <li className='hover:underline'>Categories </li>
            <li className='hover:underline'> Things to do</li>
        </ul>
        <hr className='border-black border-1' />
        <div className='grid grid-cols-6 w-[80vw] gap-8 mt-5 f'>
            {lists.map((list,index)=>(
                <div key={index} >
                    <p className='font-bold'>{list.top}</p>
                <p>{list.down}</p>
                </div>
                
            ))}
            
        </div>
        

    </div>
    <hr className='border-black mt-7' />
    <Footertwo/>
    <hr  className='mt-6 border-black' />
    <div className='flex justify-between w-[80vw] ml-[50%] translate-x-[-50%] mt-4'>
        <div className='relative flex'>
        <p className='font-semibold'>
        &copy; 2024 Airbnb,inc. <span className='relative bottom-1 font-bold'>.</span>Privacy <span className='relative bottom-1 font-bold'>.</span>terms <span className='relative bottom-1 font-bold'>.</span>sitemap <span className='relative bottom-1 font-bold'>.</span>UK Modern Slavery Act <span className='relative bottom-1 font-bold'>.</span>Company details
    </p>
    <section className='w-[120px] h-7 rounded-2xl bg-black flex gap-2 absolute left-[580px] bottom-14 '>
                <p className='text-white ml-2'>showmap</p>
                <MapIcon className='text-white'/>

            </section>
        </div>
        <div className='flex gap-3 relative mb-7'>
            <GlobeIcon/>
            <p className='font-semibold'>English(GB)</p>
            <PoundSterling/>
            <p className='font-semibold'>GBP</p>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            

        
        </div>
    </div>
    </div>
   </>
    
  )
}

export default Footer