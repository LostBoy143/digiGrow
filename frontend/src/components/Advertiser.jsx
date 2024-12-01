import { React, useState } from 'react'

const Advertiser = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='w-full relative'>
      <img src="/assets/DigiGrove Website Frame 70.png" alt="" className='md:block hidden'/>
      <div
      className={`pt-[70px] text-[#232233] font-poppins text-center text-[26px] font-extrabold md:block hidden bg-[rgb(140,197,64)] h-[200px] w-[200px] absolute top-[44%] right-0 rounded-full animate-${isHovered ? 'pop' : 'pop-reversed'}`}>
      We saved you a spot!
      </div>

      <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`md:block h-[200px] w-[200px] absolute top-[44%] right-0 rounded-full`}></div>

      <img src="/assets/Frame71.png" alt="" className='md:hidden block'/>
    </div>
  )
}

export default Advertiser
