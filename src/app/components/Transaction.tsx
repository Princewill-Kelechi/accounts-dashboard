import React, { ReactNode } from 'react'


const Transaction = ({ type, name, date, amount, status, accountNumber, icon }: {type:string, name:string, status:string, accountNumber:string, date:string, amount:string, icon:ReactNode} ) => {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 items-center px-4 py-2">
    <div className="flex items-center space-x-4 min-w-0">
      <div className={`p-4 rounded-full flex-shrink-0 flex items-center justify-center
        ${type === 'Shopping' ? 'bg-[#DCFAF8]' : type === 'Service' ? 'bg-[#E7EDFF]' : 'bg-[#FFE0EB]'}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-medium text-[16px] truncate">{name}</p>
        <p className="text-sm text-[#718EBF] truncate">{date}</p>
      </div>
    </div>
    <div className='text-[#718EBF] truncate'>{type}</div>
    <div className='text-[#718EBF] truncate'>{accountNumber}</div>
    <div className='text-[#718EBF] truncate'>{status}</div>
    <div className={`${amount.startsWith('-') ? 'text-red-500' : 'text-green-500'} text-right truncate`}>
      {amount}
    </div>
  </div>
    )
}

export default Transaction