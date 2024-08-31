import React from 'react';
import Lottie from 'lottie-react';

import CarAnimation from '../../assets/lottie/Animation - 1725084917737.json'
import TruckAnimation from '../../assets/lottie/Animation.json'
import Wind from '../../assets/lottie/wind.json'
import Back from '../../assets/lottie/back.json'
import { Link } from 'react-router-dom';

const Animation = () => {
    return (
        <div className='bg-sky-500 h-[900px] p-[40px]'>
            <Link to={"/"}>
                <button className='p-[20px] border-[2px] rounded-xl'>Go back</button>
            </Link>
            <div className='flex'>
                <div className='w-1/12 max-w-[400px]'>
                    <Lottie animationData={CarAnimation} loop={true} />
                </div>
            </div>
            <div>
                <div className='w-1/12 max-w-[400px]'>
                    <Lottie animationData={Wind} loop={true} />

                </div>
            </div>
            <div className='w-1/12 max-w-[400px]'>
                <Lottie animationData={TruckAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Animation;
