import React from 'react'
import searchicon from '../assets/images/svg/search-cricle.svg'
const Header = ({ className }) => {
    return (
        <div className={`${className} min-h-[800px] pt-[160px]`}>
            <div className="container">
                <h1 className="text-[60px] leading-[72px] text-center text-white font-extrabold font-montserrat max-w-[914px] mx-auto">
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
        </div>
    )
}

export default Header