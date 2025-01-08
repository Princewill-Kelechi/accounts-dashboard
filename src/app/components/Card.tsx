import React from 'react'
import ChipIcon from '../../../public/assets/icons/ChipIcon'
import CardCircleIcon from '../../../public/assets/icons/CardCircleIcon'

const Card = () => {
  return (
    <div><div className="card-grad text-white p-6 rounded-2xl  w-full mx-auto max-w-96">
    <div className="flex justify-between items-center mb-8">
      <div>
        <p className="text-sm opacity-80">Balance</p>
        <p className="text-2xl ">$5,756</p>
      </div>
     <ChipIcon />
    </div>
    <div className=" pb-14 flex  items-start   gap-44 md:gap-20">
      <div>
        <p className="text-sm opacity-80">CARD HOLDER</p>
        <p>Eddy Cusuma</p>
      </div>
         <div>
          <p className="text-sm opacity-80">VALID THRU</p>
          <p>12/22</p>
        </div>
      
    </div>
    <div className=' pt-2 flex justify-between items-center'>
    <div className="text-xl"> 37778 ******* 122345</div>
 <CardCircleIcon />
    </div>
  </div>
</div>
  )
}

export default Card