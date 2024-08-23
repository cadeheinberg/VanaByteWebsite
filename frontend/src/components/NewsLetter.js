import React from 'react'
import Lottie from 'lottie-react';
import animationNoteTaker from '../assets/notetaker1.json';
import animationToDo from '../assets/todo1.json';

function NewsLetter() {
    return (
        <div className='flex flex-col sm:flex-row py-16 px-4 max-w-[1000px] mx-auto'>
            <div className='sm:w-72 w-[50%] h-full mx-auto'>
                <Lottie
                    animationData={animationNoteTaker}
                    style={{ width: '100%', height: '100%' }} // Ensure the animation scales to fit the container
                />
            </div>
            <div className='flext flex-col'>
                <h1 className='text-white pt-10 sm:pt-0 text-4xl font-medium text-center sm:text-5xl'>What will you get done?</h1>
                <div className='w-72 mx-auto'>
                    <Lottie
                        animationData={animationToDo}
                        style={{ width: '100%', height: '100%' }} // Ensure the animation scales to fit the container
                    />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter