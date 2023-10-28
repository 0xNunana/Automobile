import React from 'react'
import {TfiEmail} from 'react-icons/tfi'
import {PiFacebookLogo, PiInstagramLogo} from 'react-icons/pi'
import {TiSocialTwitterCircular} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='bg-[#181a22] '>
    <div className='max-sm:mx-2 mx-20 py-20 max-sm:py-10  text-checki-gray'>
   <div className='grid md:grid-cols-4 pb-10'>
    <div className='mt-4 max-sm:mt-2'>
      <p className='my-3 text-xl font-semibold max-sm:text-md text-[#fe5c3d]'>Nunana Auto</p>
      <p className='w-full md:w-[70%] my-3 max-sm:text-sm'>Anywhere,anytime, we always provide the best service</p>
<div className='flex items-center space-x-2'>
  <TfiEmail color='#fe5c3d' size={20}/>
  <p className='max-sm:text-sm'>kudayapaul@gmail.com</p>
</div>

    </div>
    <div className='hidden md:inline-block col-span-2 '>
    <div className='grid md:grid-cols-3'>
      <div>
        <h2 className='mb-4 text-xl'>Services</h2>
      <ul>
        <li className='py-1'>Home</li>
        <li className='py-1'>Download</li>
        <li className='py-1'>Pricing</li>
        <li className='py-1'>About</li>
      </ul>
      </div>
      <div>
      <h2 className='mb-4 text-xl'  >Resources</h2>
      <ul>
      <li className='py-1'>Home</li>
        <li className='py-1'>Download</li>
        <li className='py-1'>Pricing</li>
        <li className='py-1'>About</li>
      </ul>
      </div>
      <div>
      <h2 className='mb-4 text-xl'>Support</h2>
      <ul>
      <li className='py-1'>FAQ</li>
        <li className='py-1'>How it Works</li>
        <li className='py-1'>Features</li>
      
      </ul>
      </div>
    </div>
    
    </div>
    <div>
      <p className='text-xl mb-4 max-sm:mt-3 max-sm:text-md max-sm:mb-2 font-semibold'>Connect with us</p>
      <div className='flex items-center mb-2 max-sm:mb-0'>
      <PiFacebookLogo color='white' size={35} className='m-2'/>
        <TiSocialTwitterCircular color='white' fill='#fe5c3d' size={35} className='m-2'/>
        <PiInstagramLogo color='white' size={35} className='m-2'/>
      </div>
      <p>Subscibe to your newsletter</p>
      <div className='bg-white p-2'>
<input type='email' placeholder='Enter your email' className='w-4/5 h-10 pl-2'/>
      <button className='bg-checki-orange/90 text-white w-1/5 h-10 font-semibold'>Send</button>
      </div>
    </div>
   </div>
     <hr className='py-2'/>
     <div className='flex items-center justify-center'>
      <p className='max-sm:text-sm'>Copyright {new Date().getFullYear()} car rental.All Rights reserved</p>
     </div>
      </div>
    </div>

  )
}

export default Footer