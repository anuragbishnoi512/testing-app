import React from 'react'
import contactUs from '../../assets/images/png/contact-us.png'
const Form = () => {
    const year = new Date().getFullYear();
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
            <div className='bg-[#1E1E1E] rounded-[30px_30px_0px_0px] mt-[155px]'>
                <div className="container pt-[78px]">
                    <div className="row w-full -mx-3 flex flex-row flex-nowrap justify-between">
                        <div className="col-6 px-3 w-1/2">
                            <a href=""
                                className=' font-lato font-bold text-[38px] text-[#FF5501]'>Logo <span className=' text-white'>Here</span></a>
                            <p className='max-w-[431px] font-lato font-normal text-[16px] leading-[22px] text-[#BBBBBB]'>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
                        </div>
                        <div className="col-6 w-4/12 px-3">
                            <div className="row -mx-3 flex flex-row flex-nowrap justify-between">
                                <div className="col-5 w-5/12 px-3">
                                    <h2 className=' text-white font-lato font-semibold text-[18px] text-nowrap pb-[24px]'>About website</h2>
                                    <ul className='flex flex-col gap-4'>
                                        <li><a href="" className='text-[#BBBBBB] opacity-70 font-lato font-normal text-[16px]  '>Home</a></li>
                                        <li><a href="" className='text-[#BBBBBB] opacity-70 font-lato font-normal text-[16px] text-nowrap'>How It Works</a></li>
                                        <li><a href="" className='text-[#BBBBBB] opacity-70 font-lato font-normal text-[16px]'>Testimonials</a></li>
                                        <li><a href="" className='text-[#BBBBBB] opacity-70 font-lato font-normal text-[16px]'>Why Choose Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-5 w-5/12 px-3">
                                    <h2 className=' text-white font-lato font-semibold text-[18px] text-nowrap pb-[24px]'>Follow links</h2>
                                    <ul className='flex flex-col gap-4'>
                                        <li><a href="" className='text-[#BBBBBB]  opacity-70 font-lato font-normal text-[16px]'>Instagram</a></li>
                                        <li><a href="" className='text-[#BBBBBB]  opacity-70 font-lato font-normal text-[16px]'>Twitter</a></li>
                                        <li><a href="" className='text-[#BBBBBB]  opacity-70 font-lato font-normal text-[16px]'>Discord</a></li>
                                        <li><a href="" className='text-[#BBBBBB]  opacity-70 font-lato font-normal text-[16px]'>You Tube</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg-white h-px w-full opacity-40 my-4 mt-[61px]'></div>
                <p className='text-[#BBBBBB] opacity-70 font-lato font-normal text-[16px] justify-center flex pb-[24px] mt-[24px]'> Copyright©{year} (Logo) All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Form