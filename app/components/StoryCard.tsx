import Image from 'next/image'
import React from 'react'
import { TagDataType } from '../Lib'
import Link from 'next/link'

const StoryCard = ({tag}:{tag:TagDataType}) => {
  return (
    <div key={tag.id} className='bg-white p-7 rounded-lg'>
    <Image src={tag.imageUrl} alt={tag.alt} width={1000} height={200} className='rounded-lg bg-[#f3f3f3]' />
    <div className='w-16 my-3 fon'>
    <p className=' px-4 py-1 bg-checki-orange rounded-md text-white'>New</p>
    </div>
  
    <p className='text-2xl font-semibold pb-4 max-sm:text-xl max-sm:pb-1'>{tag.title}</p>
    <p className='max-sm:text-sm'>{tag.description}</p>
    <Link href='#' className=''>
    <p className='font-medium bg-[#f3f3f3] max-sm:text-center'>{tag.additionalInfo}</p>
    </Link>
   
  </div>
  )
}

export default StoryCard