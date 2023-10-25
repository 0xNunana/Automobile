import Image from 'next/image'
import React from 'react'
import {PiFacebookLogo, PiInstagramLogo} from 'react-icons/pi'
import {TiSocialTwitterCircular} from 'react-icons/ti'

const Hero = () => {
  return (
    <div className=' h-[70vh] mx-20 mt-28'>
      <div className='flex justify-between'>
        <div className='w-[25%] '>
          <div className='flex flex-col  '>
          <PiFacebookLogo color='white' size={40} className='m-2'/>
        <TiSocialTwitterCircular color='white' size={40} className='m-2'/>
        <PiInstagramLogo color='white' size={40} className='m-2'/>
          </div>
     

        </div>
        <div className=' flex flex-col flex-grow justify-center  text-white font-serif '>
          <div className='flex justify-center'>
          <p className='w-[80%] text-center text-9xl  flex-wrap font-bold '>
          Fast And Easy Way To Rent 
        {' '} <span className='text-[#fe5c3d]'>A Branded </span> 
        {' '}Car </p>
          </div>
       
          <p className='text-center w-[40%] mx-auto my-16 text-xl'>Discover RentalX car rental options in USA with rents a car. Select from a range of car options and local specials</p>
          <div className='flex justify-center mb-5 space-x-4'>
         <Image src='/apple.png' alt='apple logo' width={120} height={50}/>
         <Image src='/google.png' alt='google logo' width={120} height={50}/>
        
          </div>
         </div>
         
      </div>
    </div>
  )
}

export default Hero