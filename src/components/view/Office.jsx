import React from 'react';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import partner from '../../assets/images/svg/Vector.svg';
import { ANOTHER_DATA } from '../../utils/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Office = () => {
    return (
        <div>
            <Navbar />
            <Header className="bg-[#43BBFF]" />
            <div className='max-w-[1140px] mx-auto my-[100px]'>
                <h2 className='text-center font-semibold text-[40px] leading-[48px] color-[#101010] font-lato my-[50px]'>
                    Lorem ipsum
                </h2>
                <div className='relative'>
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{
                            el: '.custom-pagination',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.nextbtn',
                            prevEl: '.prevbtn'
                        }}
                    >
                        {ANOTHER_DATA.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-[20px_30px] bg-[#CFEEFF] max-w-[365px] rounded-[22px]">
                                    <img src={partner} alt="image" />
                                    <h2 className='font-semibold text-[24px] mb-0 font-lato pt-[32px] leading-6'>{item.title}</h2>
                                    <p className='max-w-[282px] text-[16px] font-normal mb-0 font-lato pt-[16px] leading-6'>
                                        {item.text}
                                        <span className='text-[#007AFF]'>
                                            <a href="#">Read more</a>
                                        </span>
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-pagination"></div> {/* Custom pagination container */}
                    <div className="navigation-buttons">
                        <button className="prevbtn">Prev</button>
                        <button className="nextbtn">Next</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Office;
