import React from 'react'
import Navbar from '../../common/Navbar'
import partner from '../../assets/images/svg/Vector.svg'
import { ANOTHER_DATA } from '../../utils/helper'
import Header from '../../common/Header'
import Form from '../home/Form'
import Footer from '../../common/Footer'

const Office = () => {
    return (
        <div>
            <Navbar />
            <Header className="bg-[#43BBFF]" />
            <div className='max-w-[1140px] mx-auto'>
                <h2 className='text-center font-semibold text-[40px] leading-[48px] color-[#101010] font-lato mt-[135px] mb-0'>Lorem ipsum</h2>
                <div className='flex gap-4 justify-center flex-wrap items-center mb-[16px]'>
                    {ANOTHER_DATA.map((i, index) => (
                        <div key={index} className="p-[20px_30px] bg-[#CFEEFF] max-w-[365px] rounded-[22px]">
                            <img src={partner} alt="image" />
                            <h2 className=' font-semibold text-[24px] mb-0 font-lato pt-[32px] leading-6'>{i.title}</h2>
                            <p className='max-w-[282px] text-[16px]  font-normal mb-0 font-lato pt-[16px] leading-6'>{i.text}<span className='text-[#007AFF]'><a href="#">Read more</a></span></p>
                        </div>
                    )
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Office