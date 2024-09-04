import React from 'react'
// import { FaPlus } from "react-icons/fa6";

function ForumHeader() {
    return (
        <div className='bg-mywhite py-2'>
            <div className='flex rounded-xl bg-mywhite w-full max-w-[850px] py-4 mx-auto text-2xl'>
                <div className='flex text-gray-800 justify-center gap-x-6'>
                    <button className='bg-slate-200 rounded-xl hover:scale-110 duration-300 p-4 font-bold'>
                        <h1 className=''>All</h1>
                    </button>
                    <button className='bg-slate-200 rounded-xl hover:scale-110 duration-300 p-4 font-bold'>
                        <h1 className=''>General</h1>
                    </button>
                    <button className='bg-blue-200 rounded-xl hover:scale-110 duration-300 p-4 font-bold'>
                        <h1 className=''>L4G</h1>
                    </button>
                    <button className='bg-green-200 rounded-xl hover:scale-110 duration-300 p-4 font-bold'>
                        <h1 className=''>Ideas</h1>
                    </button>
                    <button className='bg-orange-200 rounded-xl hover:scale-110 duration-300 p-4 font-bold'>
                        <h1 className=''>Help</h1>
                    </button>
                </div>
                <div className='flex justify-end items-center w-full'>
                    <button className='bg-mygreen rounded-full hover:scale-110 duration-300 p-4 font-bold'>
                        <h1 className='text-white'>New Post</h1>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default ForumHeader