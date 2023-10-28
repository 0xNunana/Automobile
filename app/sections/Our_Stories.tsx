import React from 'react'
import StoryCard from '../components/StoryCard'

import { tagData } from '../Data'

const Our_Stories = () => {
  return (
    <div className='bg-[#f3f3f3] '>
  <div className='max-sm:mx-2 mx-20  py-[7rem] max-sm:py-[3rem]'>
    <div className='flex justify-center items-center pb-10 max-sm:pb-5'>
      <p className='text-4xl font-semibold max-sm:text-2xl'>Read Our Stories</p>
    </div>
    <div className='grid md:grid-cols-3 gap-10 '>
    {tagData.map((tag) => (
      <div className='mx-3 flex justify-center p-3 '>
<StoryCard tag={tag}/>
      </div>
))}
    </div>
  </div>
    </div>
  
  )
}

export default Our_Stories