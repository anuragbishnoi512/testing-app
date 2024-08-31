import React from 'react'
import searchicon from '../assets/images/svg/search-cricle.svg'
import Lottie from 'lottie-react';
import Aeroplane from '../../src/assets/lottie/aeroplane.json'
import Chooper from '../../src/assets/lottie/chooper.json'
import Train from '../../src/assets/lottie/train.json'
import 'animate.css';

const Header = ({ className }) => {
    return (
        <div className={`${className} min-h-[800px] pt-[160px] relative`}>
            <div className="container">
                <h1 className="text-[60px] leading-[72px] text-center text-white font-extrabold font-montserrat max-w-[914px] mx-auto animate__animated animate__bounce">
                    Lorem ipsum dolor sit amet consectetur. Sceleris
                </h1>
                <p className="font-montserrat font-medium text-[16px] leading-[22px] mx-auto text-center text-white mt-[20px]">Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.</p>
                <div className=" flex items-centerborder-[1px] border-[#BDBDBD]  outline-none max-w-[435px] h-[53px] p-[3px_3px_3px_15px] rounded-[15px] min-h-[53px] bg-white justify-between mx-auto mt-[40px]">
                    <div className='flex items-center gap-[20px]'>
                        <img src={searchicon} alt="" />
                        <input type="search" placeholder='seacrh' className='outline-none' />
                    </div>
                    <button className='p-[14px_24px] font-lato bg-[#FF722C] font-semibold text-center text-[16px] text-white p[14px_27px] rounded-[13px] items-center flex'>Start</button>
                </div>
            </div>
            <div className='w-3/12 max-w-[600px] absolute top-[25%] left-[4%]'>
                <Lottie animationData={Aeroplane} loop={true} />
            </div>
            <div className='w-3/12 max-w-[600px] absolute top-[25%] right-[2%]'>
                <Lottie animationData={Chooper} loop={true} />
            </div>
            <div className='w-full absolute top-[70%]  flex justify-center'>
                <Lottie animationData={Train} loop={true} />
            </div>
        </div>
    )
}

export default Header