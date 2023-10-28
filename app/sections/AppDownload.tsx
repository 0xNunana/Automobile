import Image from 'next/image'
import React from 'react'

const AppDownload = () => {
  return (
    <div className=' mx-3 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-60 my-10 sm:my-20 md:my-32 lg:my-40 items-center'>
      
    <div className='bg-[#181a22] h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh]  text-white rounded-lg grid lg:grid-cols-2 relative'>
<div className='  m-5 md:m-10 lg:m-20 '>
<p className=' md:text-xl  lg:text-2xl xl:text-3xl md:mt-10 font-semibold '>Download the free Nunana Auto App</p>
<p className='mt-2 mb-7 text-sm md:text-base'>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem magni adipisci, suscipit 
  
</p>
<div className='w-20 md:w-32 xl:w-40  flex   space-x-4'>
         <Image src='/apple.png' alt='apple logo' width={120} height={50} className='md:w-[200px] md:h-[50px] rounded-lg' />
         <Image src='/google.png' alt='google logo' width={120} height={50} className='md:w-[200px] md:h-[50px] rounded-lg'/>
        
          </div>
</div>
<div className='hidden lg:flex'>
  <Image src='/Phone.png' alt='Phone' width={320} height={200} className='absolute -top-24 right-[10%] hidden lg:flex'/>
</div>
    </div>
      </div>
  )
}

export default AppDownload