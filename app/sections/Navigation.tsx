import React from 'react'
import { paths } from '../Data'
import { Path } from '../Lib'
import Link from 'next/link'
import {FiSearch} from 'react-icons/fi'


// component for navigation  and login
const Navigation = () => {
  return (
    <nav className='flex justify-between items-center mx-20 z-20 text-xl font-semibold  text-white sticky top-0' >
      <p className='text-[#ff7048] '>Automobile</p>


{/* path to pages */}

      <ul className='flex flex-grow justify-center '>
{paths.map((item:Path,index:number)=>(
  <li className='flex mx-7 font-normal' key={index}>
    <Link href='#'>
    {item.title}
    </Link>
   
    </li>
))}
      </ul>


      {/* search and login */}
      <div className='flex justify-between space-x-2'>
        <button className='px-2 rounded-sm bg-white flex justify-center items-center '>
         <FiSearch color='black' size='28px'/>
        </button>
        <button className='bg-[#fe5c3d] rounded-sm px-6 py-2'>
          Log In
        </button>
      </div>
    </nav>
  )
}

export default Navigation