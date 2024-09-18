import React from 'react';
import Lottie from 'lottie-react';
import { useState } from 'react';

import toy from '../../assets/lottie/Animation - 1725084917737.json'
import { Link } from 'react-router-dom';

const Animation = () => {
   
    const[count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);

    return (
        <div className='bg-sky-500 h-[900px] p-[40px]'>
            <div>
                <Link to={"/"}>
                    <button className='p-[20px] border-[2px] rounded-xl'>Go back</button>
                </Link>
                <div className='flex'>
                    <div className='w-1/12 max-w-[400px]'>
                        <Lottie animationData={toy} loop={true} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h1 className='p-[15px] w-[200px] bg-green-500 border rounded-sm font-semibold text-xl text-center my-8'>Count : {count}</h1>
                <div>
                    <button className='p-[15px] w-[150px] bg-black border rounded-xl text-white font-medium text-2xl mr-7' onClick={() => setCount(count + 1)}>Plus</button>
                    <button className='p-[15px] w-[150px] bg-black border rounded-xl text-white font-medium text-2xl mr-7' onClick={() => setCount(count - 1)}>Minus</button>
                    <button className='p-[15px] w-[150px] bg-black border rounded-xl text-white font-medium text-2xl mr-7' onClick={() => setCount(count * 2)}>Multiply</button>
                    <button className='p-[15px] w-[150px] bg-black border rounded-xl text-white font-medium text-2xl mr-7' onClick={() => setCount(count / 2)}>Divide</button>
                </div>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h2 className='p-[15px] w-[200px] bg-green-500 border rounded-sm font-semibold text-xl text-center my-8'>Name : {toggle ? "react js" : "next js"}</h2>
                <div>
                    <button className='p-[15px] w-[200px] bg-black border rounded-xl text-white font-medium text-2xl' onClick={() => setToggle(!toggle)}>Change Name</button>
                </div>
            </div>
        </div>
    );
};

export default Animation;

