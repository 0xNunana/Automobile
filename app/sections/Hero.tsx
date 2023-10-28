import Image from 'next/image'
import React from 'react'
import {PiFacebookLogo, PiInstagramLogo} from 'react-icons/pi'
import {TiSocialTwitterCircular} from 'react-icons/ti'

const Hero = () => {
  return (
    <div className=' h-[70vh] max-sm:mx-2 mx-20 mt-28 relative'>
      <div className='flex justify-between'>
        <div className='hidden sm:w-[25%] sm:flex'>
          <div className='flex flex-col  '>
          <PiFacebookLogo color='white' size={40} className='m-2'/>
        <TiSocialTwitterCircular color='white' size={40} className='m-2'/>
        <PiInstagramLogo color='white' size={40} className='m-2'/>
          </div>
     

        </div>
        <div className=' flex flex-col flex-grow justify-center  text-white font-serif '>
          <div className='flex justify-center'>
          <p className=' text-4xl text-checki-hero w-full md:text-6xl lg:text-7xl xl:w-[90%] 2xl:w-[80%] text-center xl:text-8xl 2xl:text-9xl  flex-wrap font-bold   '>
          Fast And Easy Way To Buy 
        {' '} <span className='text-[#fe5c3d]'>An Affordable </span> 
        {' '}Car </p>
          </div>
       
          <p className='text-center lg:w-[50%] xl:w-[50%]  mx-auto md:my-5 lg:my-6 xl:my-10 text-2xl max-sm:text-sm  max-sm:my-3 text-checki-gray'>Discover Nunana Auto car rental and sales options in USA. Select from a range of car options and local specials</p>
          <div className='w-20 md:w-40 mx-auto flex justify-center mb-5 space-x-4'>
         <Image src='/apple.png' alt='apple logo' width={120} height={50} className='md:w-[200px] md:h-[50px] rounded-lg' />
         <Image src='/google.png' alt='google logo' width={120} height={50} className='md:w-[200px] md:h-[50px] rounded-lg'/>
        
          </div>
         </div>
         
      </div>
    
    </div>
  )
}

export default Hero