import React from 'react'
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className=' flex  h-screen w-full'>
        <div className=' md:block hidden'>
         <Sidebar />
        </div>

        <div className=' w-full  '>
          <div className=' sticky top-0 z-50'> 
          <TopBar />
          </div>
          <div className='  min-h-[100vh] bg-[#F5F7FA]'>
          {children}

          </div>
         </div>
    </div>
  )
}

export default layout