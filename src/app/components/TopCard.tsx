import React, { ReactNode } from 'react'

const TopCard = ({text, bal, icon, style} : {text:string, bal:string, icon:ReactNode, style:string}) => {
  return (
    <div className=' flex gap-4 w-full bg-white p-6 rounded-[25px]'> 
        <div className={` p-5 rounded-full ${style}`}>
{icon}
        </div>
        <div className="text flex flex-col justify-center gap-1">
            <span className='text-[16px] text-[#718EBF]'>{text}</span>
            <span className=' text-[25px] text-[#232323] font-semibold'>${bal}</span>
        </div>

    </div>
  )
}

export default TopCard