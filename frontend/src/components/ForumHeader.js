import React from 'react'
// import { FaPlus } from "react-icons/fa6";

function ForumHeader() {
    return (
        <div className='bg-mywhite py-2'>
            <div className='flex rounded-xl bg-mywhite w-full max-w-[850px] px-2 xs:px-4 pt-3 pb-1 xs:py-4 mx-auto text-md font-medium sm:text-2xl xs:font-bold'>
                <div className='flex text-gray-800 justify-center gap-x-[7px] sm:gap-x-6'>
                    <button className='bg-slate-200 rounded-xl h-fit hover:scale-110 duration-300 p-2 xs:p-4'>
                        <h1 className=''>All</h1>
                    </button>
                    <button className='bg-slate-200 rounded-xl h-fit hover:scale-110 duration-300 p-2 xs:p-4'>
                        <h1 className=''>General</h1>
                    </button>
                    <button className='bg-blue-200 rounded-xl h-fit first-line:hover:scale-110 duration-300 p-2 xs:p-4'>
                        <h1 className=''>L4G</h1>
                    </button>
                    <button className='bg-green-200 rounded-xl h-fit hover:scale-110 duration-300 p-2 xs:p-4'>
                        <h1 className=''>Ideas</h1>
                    </button>
                    <button className='bg-orange-200 rounded-xl h-fit hover:scale-110 duration-300 p-2 xs:p-4'>
                        <h1 className=''>Help</h1>
                    </button>
                </div>
                <div className='flex justify-end items-center w-full'>
                    <button className='bg-mygreen rounded-full h-fit hover:scale-110 duration-300 p-2 xs:p-4'>
                        <h1 className='text-white'>New</h1>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default ForumHeader