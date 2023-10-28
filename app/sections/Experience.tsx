import Image from 'next/image'
import React from 'react'
import { experienceData } from '../Data'


const Experience = () => {
  return (
    <div className='max-sm:mx-2 mx-32 mb-5 max-sm:mb-2'>
      <div>
<p className='text-center py-10 max-sm:py-5'>Why Choose Us</p>
<div className='flex justify-center '>
  <p className='md:w-[50%] lg:w-[30%] mx-auto  text-center text-3xl max-sm:text-xl flex-wrap font-semibold'> We Offer best experience with our rental deals</p>
 </div>
      </div>
      <div className='flex'>
<div className='hidden lg:flex w-[70%] justify-center relative text'>
  <Image src='/rolls.png' alt='car' width={1000} height={500} className='object-cover'/>
</div>
<div className=''>
{experienceData.map((item)=>(
        <div className='flex my-5 max-sm:my-3 ' key={item.id}>
   
        <div className='flex items-center justify-center text-2xl px-2'>
             <p className='bg-checki-orange p-1 rounded-md text-center text-white'>{item.icon}</p> 
              </div>
        <div>
          <p className='font-semibold text-xl max-sm:text-base'>{item.title}</p>
          <p className='md:w-[70%] tracking-tight leading-0 max-sm:text-sm'>{item.description}</p>
        </div>
      </div>
      ))}

  
  </div>
</div>
      </div>

   
  )
}

export default Experience