import React from 'react';
import Logo from '../../../public/assets/svgs/Logo';
import HomeIcon from '../../../public/assets/icons/HomeIcon';
import TransactionIcon from '../../../public/assets/icons/TransactionIcon';
import AccountIcon from '../../../public/assets/icons/AccountIcon';
import InvestmentIcon from '../../../public/assets/icons/InvestmentIcon';
import CreditIcon from '../../../public/assets/icons/CreditIcon';
import LoanIcon from '../../../public/assets/icons/LoanIcon';
import ServicesIcon from '../../../public/assets/icons/ServicesIcon';
import Privileges from '../../../public/assets/icons/Privileges';
import SettingsIcon from '../../../public/assets/icons/SettingsIcon';


const Sidebar = () => {
  
  const nav = [
    { label: 'Dashboard', active: false, icon:<HomeIcon /> },
    { label: 'Transactions', active: false , icon:<TransactionIcon /> },
    { label: 'Accounts', active: true, icon:<AccountIcon /> },
    { label: 'Investments', active: false, icon: <InvestmentIcon /> },
    { label: 'Credit Cards', active: false, icon:<CreditIcon /> },
    { label: 'Loans', active: false, icon:<LoanIcon /> },
    { label: 'Services', active: false, icon:<ServicesIcon /> },
    { label: 'My Privileges', active: false, icon:<Privileges /> },
    { label: 'Setting', active: false , icon:<SettingsIcon /> }
  ];

  return(
    <div className="w-64 h-screen bg-white border-r py-6 space-y-6">
      <div className="flex items-center px-6 mb-10 space-x-2">
        <Logo />
       </div>

      
      
      { nav.map((item, index) => (
     
                 

         <div
          key={index}
          className={`flex items-center      `}
        >
        {item.active &&  <span key={item.label}  className='active'></span> }

<div   className={`flex items-center justify-center gap-3 text-[#B1B1B1]   px-9   rounded-lg cursor-pointer
            ${item.active ? '   text-[#1814F3]  ' : '    hover:bg-gray-50'}`}
        >
 {item.icon}
  <span>{item.label}</span>
</div>
       
        </div>
      
      ))}
      
    </div>
  );
}

  export default Sidebar;