import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className='uppercase text-mygreen font-bold p-2'>Improving one character at a time</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold pb-2 md:py-3 '>Write it right.</h1>
                <div className='flex justify-center items-center md:text-4xl sm:text-3xl text-xl font-bold'>
                    <p className='pr-2 py-1 sm:py-4 sm:pr3'>Precision notes for </p>
                    <ReactTyped className='text-gray-500' strings={["programmers", "engineers", "mathematicians"]} typeSpeed={80} backSpeed={80} loop />
                </div>
                <p className='md:text-xl text-lg font-bold text-gray-500'>Start today by signing up, or log in</p>
                <button className='text-myblack bg-mygreen w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6'>Sign Up</button>
            </div>
        </div>
    )
}

export default Hero