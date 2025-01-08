import React, { ReactNode } from 'react'

const Invoices = ({ icon, name, time, amount, style } : {icon:ReactNode, name:string, time:string, amount:string, style:string}) => {
  return (
         <div className="flex items-center justify-between p-4 ">
          <div className="flex items-center space-x-4">
            <div className={`p-4 rounded-[20px] ${style} flex items-center justify-center`}>
            {icon}
            </div>
            <div>
              <p className="font-medium text-[#B1B1B1]">{name}</p>
              <p className="text-sm text-[#718EBF]">{time}</p>
            </div>
          </div>
          <div className="text-[#718EBF] font-medium">${amount}</div>
        </div>
      );
}

export default Invoices