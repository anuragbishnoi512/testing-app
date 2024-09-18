import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Navigation, Pagination } from 'swiper/modules';



const SwiperSlider = () => {
    return (
        <>
            <div className='container max-w-[1440px]'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                    }}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1000, // Time in milliseconds between slide transitions
                        disableOnInteraction: false, // Continue autoplay after user interactions
                    }}
                    loop={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className='w-full max-w-[400px]'>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='w-full max-w-[400px]'>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='w-full max-w-[400px]'>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='w-full max-w-[400px]'>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='w-full max-w-[400px]'>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='w-full max-w-[400px]'>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='w-full max-w-[400px]'>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='w-full max-w-[400px]'>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className='w-full max-w-[400px]'>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}



export default SwiperSlider