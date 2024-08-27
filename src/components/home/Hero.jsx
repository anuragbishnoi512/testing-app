import React from 'react'
import partner from '../../assets/images/svg/Vector.svg'
import { CARD_DATA } from '../../utils/helper'

const Hero = () => {

  return (
    <div className='max-w-[1140px] mx-auto'>
      <h2 className='text-center font-semibold text-[40px] leading-[48px] color-[#101010] font-lato mt-[135px] mb-0'>Lorem ipsum</h2>
      <div className='flex gap-4 justify-center items-center mb-[200px]'>
        {CARD_DATA.map((i, index) => (
          <div key={index} className="p-[20px_30px] bg-[#FFF3ED] max-w-[365px] rounded-[22px] mt-[40px]">
            <img src={partner} alt="image" />
            <h2 className=' font-semibold text-[24px] mb-0 font-lato pt-[32px] leading-6'>{i.title}</h2>
            <p className='max-w-[282px] text-[16px]  font-normal mb-0 font-lato pt-[16px] leading-6'>{i.text}<span className='text-[#FF5501]'><a href="#">Read more</a></span></p>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default Hero