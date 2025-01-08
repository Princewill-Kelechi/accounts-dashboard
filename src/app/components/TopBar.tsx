import React from 'react'
import SearchIcon from '../../../public/assets/icons/SearchIcon'
import TopBarSettingIcon from '../../../public/assets/icons/TopBarSettingIcon'
import NotificationIcon from '../../../public/assets/icons/NotificationIcon'
import Image from 'next/image'

const TopBar = () => {
  return (
    <div className=' py-4 shadow-md  px-8 md:px-6   flex items-center justify-between gap-3 bg-white'>
    <h2 className='text-[#343C6A] font-bold text-[20px] md:text-[28px]'>Accounts</h2>


    <div className=' flex items-center gap-3'>
        <div className='  hidden  bg-[#F5F7FA]  rounded-[40px] py-3 px-3  sm:flex items-center gap-3 '>
            <SearchIcon />
            <input type="text" className=' bg-inherit text-[#8BA3CB]' placeholder='Search for something' />

        </div>
        <div className=' bg-[#F5F7FA] p-3 rounded-full'>
            <TopBarSettingIcon />
        </div>
        <div className=' bg-[#F5F7FA] p-3 rounded-full'>
            <NotificationIcon />
         </div>
         <div className=' w-[40px] h-[40px]  '>
            <Image src='/assets/images/girl.png' alt=''  width={400} height={100} className='rounded-full w-full h-full   object-cover ' />
         </div>
    </div>
    </div>
  )
}

export default TopBar