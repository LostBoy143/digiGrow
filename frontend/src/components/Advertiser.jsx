import { React, useState } from 'react'

const Advertiser = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='w-full relative'>
      <img src="/assets/DigiGrove Website Frame 70.png" alt="" className='md:block hidden'/>
      <div
      className={`flex flex-col align-center justify-center pt-[16px] text-[#232233] font-poppins text-center text-[150%] font-extrabold bg-[rgb(140,197,64)] h-[25%] w-[14.2%] absolute top-[44%] right-0 rounded-full animate-${isHovered ? 'pop' : 'pop-reversed'}`}>
      We saved you a spot!
      </div>

      <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-[25%] w-[14.2%] absolute top-[44%] right-0 rounded-full hidden lg:block`}></div>

      <img src="/assets/Frame71.png" alt="" className='md:hidden block'/>
    </div>
  )
}

export default Advertiser
