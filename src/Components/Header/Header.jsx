import React from 'react'

const Header = () => {
  return (
    <div className='px-[83px] py-[15px] flex justify-between items-center'>
      <p className='text-4xl font-bold text-white'>Anonime</p>
      <p className='text-lg font-normal text-[#868686]'>Home</p>
      <p className='text-lg font-normal text-[#868686]'>List anime</p>
      <input type="text" placeholder='Search anime or movie' className='text-lg font-normal text-[#868686] bg-[#374151] py-[8px] pl-[18px] pr-[100px] rounded-[37px]'/>
    </div>
  )
}

export default Header