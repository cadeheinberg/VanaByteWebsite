import React from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";

function Thumbnail(props) {
    return (
        <div className='text-slate-600 flex flex-col bg-white rounded-lg p-2 pb-4 sm:p-5 shadow-md sm:border-slate-200 sm:border-l-[5px]'>
            <div className='flex flex-col'>
                <div className='flex '>
                    <div className='w-[100px] p-3'>
                        <img className='w-full'
                            src={props.profile_pic}
                            alt="Author"
                        />
                    </div>
                    <div className='flex items-center p-3'>
                        <div>
                            <h2 className='text-nowrap'>{props.author}</h2>
                            <p className='text-nowrap'>Noob</p>
                            <p className='text-nowrap'>{props.date}</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center p-2  w-full'>
                    <h1 className='font-bold text-2xl sm:text-4xl'>{props.title}</h1>
                </div>
            </div>
            <div className='border-b-[1px]'>
                <p className='p-2 py-0 pb-1 sm:py-3 text-lg'>{props.description}</p>
            </div>
            <div className=''>
                <div className='flex gap-x-3 sm:gap-x-6 p-2 sm:p-4 pb-0'>
                    <div className='flex gap-x-2'>
                        <span className='font-medium text-lg'>100</span>
                        <span>
                            <AiFillLike
                                className='text-blue-500 h-6 w-6 sm:h-6 sm:w-6 md:h-6 md:w-6'
                            />
                        </span>
                    </div>
                    <div className='flex gap-x-2'>
                        <span className='font-medium text-lg'>23</span>
                        <span>
                            <AiFillDislike
                                className='text-red-500 h-6 w-6 sm:h-6 sm:w-6 md:h-6 md:w-6'
                            />
                        </span>
                    </div>
                    <div className='flex justify-end w-full'>
                        <span className='font-medium text-lg rounded-xl underline underline-offset-2'>see the 8 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thumbnail;
