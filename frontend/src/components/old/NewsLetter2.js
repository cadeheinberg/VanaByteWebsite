import React from 'react'
import Lottie from 'lottie-react';
import animationNoteTaker from '../../assets/notetaker1.json';

function NewsLetter() {
    return (
        <div className='flex flex-col sm:flex-row py-16 space-x-2 px-4 max-w-[1000px] mx-auto'>
            <div className='sm:w-72 w-[50%] h-full mx-auto'>
                <Lottie
                    animationData={animationNoteTaker}
                    style={{ width: '100%', height: '100%' }} // Ensure the animation scales to fit the container
                />
            </div>
            <div className='flext flex-col'>
                <p className='uppercase text-mygreen'>Personalized notes on the go</p>
                <h1 className='text-white pt-10 sm:pt-0 text-3xl font-medium text-center sm:text-4xl'>What will you get done?</h1>
                <ul className='text-white'>
                    <li>Nothing</li>
                </ul>
            </div>
            <ul>
                <li>Cade Heinberg</li>
                <li className='italic'>cadeheinberg@outlook.com</li>
            </ul>
            <ul>
                <li className='uppercase text-mygreen'>Powered By</li>
                <li>REACT, TailWindCSS</li>
                <li>Lottie, react-svg, framer-motion</li>
                <li>NodeJS, Express, Cors, MySQL, JWT, Bcrypt</li>
            </ul>
        </div>
    )
}

export default NewsLetter