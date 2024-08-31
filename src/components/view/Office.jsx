import React from 'react'
import Navbar from '../../common/Navbar'
import partner from '../../assets/images/svg/Vector.svg'
import { ANOTHER_DATA } from '../../utils/helper'
import Header from '../../common/Header'
import Footer from '../../common/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import Animation from '../home/Animation'


const Office = () => {
    return (
        <div>
            <Navbar />
            <Header className="bg-[#43BBFF]" />
            {/* <Animation /> */}
            <div className='max-w-[1140px] mx-auto my-[100px]'>
                <h2 className='text-center font-semibold text-[40px] leading-[48px] color-[#101010] font-lato   my-[50px]'>Lorem ipsum</h2>
                <div className='flex gap-4 justify-center flex-wrap items-center mb-[16px]'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation={{
                            nextEl: '.nextbtn',
                            prevEl: '.prevbtn'
                        }}
                    >
                        {ANOTHER_DATA.map((i, index) => (
                            <SwiperSlide>
                                <div key={index} className="p-[20px_30px] bg-[#CFEEFF] max-w-[365px] rounded-[22px]">
                                    <img src={partner} alt="image" />
                                    <h2 className=' font-semibold text-[24px] mb-0 font-lato pt-[32px] leading-6'>{i.title}</h2>
                                    <p className='max-w-[282px] text-[16px]  font-normal mb-0 font-lato pt-[16px] leading-6'>{i.text}<span className='text-[#007AFF]'><a href="#">Read more</a></span></p>
                                </div>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Office