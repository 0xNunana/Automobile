import React from 'react'
import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='bg-[#181a22] text-[#fbfbfb] max-sm:py-5py-40'>
  <div className='max-sm:mx-2 mx-32  grid lg:grid-cols-3  p-5'>
    <div className='flex items-center justify-center'>
    <div className='  pl-5'>
      <p className='py-2 max-sm:text-sm'>Testimonials</p>
      <p className='text-3xl font-semibold py-3 max-sm:text-xl'>Our Client&apos;s Reviews & Testimonials</p>
      <blockquote  className="sm:flex lg:block">
      
               
                    <div className=" sm:ml-6 sm:mt-0 lg:ml-0 ">
                      <p className="text-lg text-checki-gray max-sm:text-sm">        The majority of our users tell us that we are the best in auto financing</p>
                    
                    </div>
                  </blockquote>
      
    
      <div className='flex mt-4 items-center space-x-2'>
      
      
      <div className="flex items-center ">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <AiFillStar
                      key={rating}
                      className='
                        text-yellow-400
                       '
                      
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p>5.0</p>
      </div>
    
      <div className='flex items-center space-x-4 mt-5'>
        <div className='border rounded-full max-sm:h-10 max-sm:w-10 h-16 w-16 flex items-center justify-center'>
          <Image src='/0xNunana.png' alt='user image' width={100} height={100} className='rounded-full'/>
        </div>
        <div>
          <p className='text-xl max-sm:text-sm font-semibold'>Kudaya Paul Yao</p>
          <p className='max-sm:text-sm'>0xNunana</p>
        </div>
      </div>
    </div>
    </div>
 
    <div className='hidden lg:inline-block md:col-span-2 relative '>
      <div className='flex justify-center'>
      <Image src='/black.png' alt='car' width={1000} height={500} className='object-cover'/>

      </div>
 
</div>


      
      </div>
    </div>
  
  )
}

export default Testimonial