import React from 'react'
import { ReactTyped } from "react-typed";
import LOGIN_MODE from '../enums/login_mode';

function Hero({ userData, openLoginModal }) {

    const welcomeMessage = userData ? 'Minecraft 1.21' : 'Minecraft 1.21';
    const precisionText = userData ? 'Join a game of' : 'Join a game of';
    const description = userData ? `Welcome back ${userData.userName}` : 'Sign up to sync your MC account';

    const greenButton = userData ? <button className='text-myblack bg-mygreen w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6'>View Forums</button>
        : <button className='text-myblack bg-mygreen w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6' onClick={() => { openLoginModal(LOGIN_MODE.register) }}>Sign Up</button>;

    return (
        <div className="text-white">
            <div className="max-w-[800px] w-full pt-32 pb-56 mx-auto text-center flex flex-col justify-center">
                <p className='uppercase text-mygreen font-bold p-2'>IP: vanabyte.com</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold pb-2 md:py-3'>
                    {welcomeMessage}
                </h1>
                <div className='flex justify-center items-center md:text-4xl sm:text-3xl text-xl font-bold'>
                    <p className='pr-2 py-1 sm:py-4 sm:pr-3'>
                        {precisionText}
                    </p>
                    <ReactTyped className='text-gray-500' strings={["Royale", "Ladders", "KitPVP"]} typeSpeed={80} backSpeed={80} loop />
                </div>
                <p className='md:text-xl text-lg font-bold text-gray-500'>
                    {description}
                </p>
                {greenButton}
            </div>
        </div>
    )
}

export default Hero