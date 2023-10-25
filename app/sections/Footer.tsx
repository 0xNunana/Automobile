import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#181a22] h-[30vh]'>
    <div className='mx-20 py-20 text-[#efeff0]'>
     <div>info</div>
     <hr className='py-2'/>
     <div className='flex items-center justify-center'>
      <p>Copyright {new Date().getFullYear()} car rental.All Rights reserved</p>
     </div>
      </div>
    </div>

  )
}

export default Footer