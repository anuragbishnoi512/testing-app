import React from 'react';
import Lottie from 'lottie-react';
import { useState } from 'react';

import toy from '../../assets/lottie/Animation - 1725084917737.json'
import { Link } from 'react-router-dom';

const Animation = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Code with");

    const plus = () => {
        setCount(count + 2);
    };

    const minus = () => {
        setCount(count - 2);
    };

    const multiply = () => {
        setCount(count * 2);
    };
    const divide = () => {
        setCount(count / 2);
    };
    const changeName = () => {
        setName(name === "Code with" ? "React js" : "Next js");
    };


    return (
        <div className='bg-sky-500 h-[900px] p-[40px]'>
            <Link to={"/"}>
                <button className='p-[20px] border-[2px] rounded-xl'>Go back</button>
            </Link>
            <div className='flex'>
                <div className='w-1/12 max-w-[400px]'>
                    <Lottie animationData={toy} loop={true} />
                </div>

                
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h1 className='p-[15px] w-[200px] bg-green-500 border rounded-sm font-semibold text-xl text-center my-8'>Count : {count}</h1>
                <div>
                    <button className='p-[15px] w-[150px] bg-black border rounded-xl text-white font-medium text-2xl mr-7' onClick={plus}>Plus</button>
                    <button className='p-[15px] w-[150px] bg-black border rounded-xl text-white font-medium text-2xl mr-7' onClick={minus}>Minus</button>
                    <button className='p-[15px] w-[150px] bg-black border rounded-xl text-white font-medium text-2xl mr-7' onClick={multiply}>Multiply</button>
                    <button className='p-[15px] w-[150px] bg-black border rounded-xl text-white font-medium text-2xl mr-7' onClick={divide}>Divide</button>
                </div>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h2 className='p-[15px] w-[200px] bg-green-500 border rounded-sm font-semibold text-xl text-center my-8'>Name : {name}</h2>
                <div>
                    <button className='p-[15px] w-[200px] bg-black border rounded-xl text-white font-medium text-2xl' onClick={changeName}>Change Name</button>
                </div>
            </div>
        </div>
    );
};

export default Animation;

