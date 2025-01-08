import React from 'react'
import TopCard from '../components/TopCard'
import BalanceIcon from '../../../public/assets/icons/BalanceIcon'
import Transaction from '../components/Transaction'
import SpotifyIcon from '../../../public/assets/icons/SpotifyIcon'
import SettingsIcon from '../../../public/assets/icons/TransactionSettingIcon'
import PersonIcon from '../../../public/assets/icons/PersonIcon'
import Card from '../components/Card'
import Invoices from '../components/Invoices'
import AppleIcon from '../../../public/assets/icons/AppleIcon'
 import PlaystationIcon from '../../../public/assets/icons/PlaystationIcon'
 import Chart from '../components/Chart'

const page = () => {
  return (
    <div className=' py-9 md:px-6 px-8'> 

    <div className='  grid   grid-cols-1 items-center place-content-center sm:grid-cols-2 md:grid-cols-4  gap-3 '>
      <TopCard text='My Balance' style='bg-[#FFF5D9]'  bal='12,750' icon={<BalanceIcon />} />
      <TopCard text='Income' style='bg-[#E7EDFF]'  bal='5,600' icon={<BalanceIcon />} />
      <TopCard text='Expense'style='bg-[#FFE0EB]'  bal='3,460' icon={<BalanceIcon />} />
      <TopCard text='Total Saving' style='bg-[#DCFAF8]'  bal='7,920' icon={<BalanceIcon />} />
    </div>
    <div className=' flex gap-3  md:flex-row flex-col  items-start mt-7'>
    <div className=' flex-1'>
      <h4 className='py-2 font-semibold text-[22px] mb-6 text-[#333B69]'>Last Transaction</h4>
      <div className=' bg-white px-4 py-5 rounded-[25px]'>
 <Transaction type='Shopping' name='Spotify Subscription ' date='25 Jan 2021' accountNumber='1234******' amount='-$150' status='Pending' icon= {<SpotifyIcon />} />

 <Transaction type='Service' name='Mobile Service' date='25 Jan 2021' accountNumber='1234******' amount='-$340' status='Completed' icon= {<SettingsIcon />} />
 <Transaction type='Transfer' name='Spotify Subscription ' date='25 Jan 2021' accountNumber='1234******' amount='+$780' status='Completed' icon= {<PersonIcon />} />
      </div>
    </div>

  
<div className=' '>
  <div className=' flex justify-between items-center mb-6 px-4'>
    <h4 className='py-2 font-semibold text-[#333B69] text-[22px]'>My Cards</h4>
    <h4 className='py-2 font-semibold text-[#333B69] text-[18px]'> See All</h4>

  </div>
<Card />
</div>
       
    </div>
    <div className=' flex items-start md:flex-row flex-col gap-7 mt-7'>
      <div className='   flex-1 w-full'>
        <h3 className='py-2 font-semibold text-[22px] mb-6 text-[#333B69]'>Debit & Credit Overview</h3>
        <Chart />
      </div>

      <div className=' flex-1  w-full  md:max-w-[350px]'>

      <h3 className='py-2 font-semibold text-[22px] mb-6 text-[#333B69]'>Invoices</h3>

    <div className=' bg-white rounded-[25px] mt-7 p-4'>
      <Invoices name='Apple' style='bg-[#DCFAF8]' icon={<AppleIcon />} time='5h ago' amount='540' />
      <Invoices name='Michael' style='bg-[#FFF5D9]' icon={<PersonIcon color='#FFBB38' />} time='2 days ago' amount='540' />
      <Invoices name='Play station' style='bg-[#E7EDFF]'  icon={<PlaystationIcon />} time='1 hr ago' amount='540' />
      <Invoices name='Williams' style='=bg-[#FFE0EB]' icon={<AppleIcon />} time='2 hr ago' amount='540' />
    </div>
    </div>
    </div>

 
    </div>
  )
}

export default page