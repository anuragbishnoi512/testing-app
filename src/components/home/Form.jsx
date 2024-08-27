import React from 'react'
import contactUs from '../../assets/images/png/contact-us.png'
const Form = () => {

    return (
        <>
            <div className=" container">
                <div className="flex items-center gap-9 justify-center">
                    <div className='max-w-[388px] h-[523px]'>
                        <img src={contactUs} alt="image" />
                    </div>
                    <div>
                        <h2 className='font-lato font-bold text-[48px] leading-[60px]'>Get Updated With Us</h2>
                        <p className='font-lato font-normal text-[16px] leading-[26px] max-w-[578px] text-[#C9C9C9] mt-[16px]'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                        <form className='flex flex-col mt-[28px]'>
                            <label className='gap-[24px] flex'>
                                <input type="text" placeholder='Your Name' className='border max-w-[325px] p-[19px_229px_12px_16px] outline-none' required />
                                <input type="email" placeholder='Your Email Address' className='border max-w-[325px] p-[19px_170px_12px_16px] outline-none' required />
                            </label>
                            <label className='gap-[24px] flex mt-[24px]'>
                                <input type="password" placeholder='Enter Password' className='border max-w-[325px] p-[19px_197px_12px_16px] outline-none' required />
                                <input type="password" placeholder='Confirm Password' className='border max-w-[325px] p-[19px_197px_12px_16px] outline-none' required />
                            </label>
                            <button className='bg-[#92140C] p-[14px_18px] text-white max-w-[155px] hover:text-[#92140C] hover:bg-[white] border-[1px] duration-500 font-semibold text-[18px] border-[#92140C] rounded-[5px] mt-[49px]'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form