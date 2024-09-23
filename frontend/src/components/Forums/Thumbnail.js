import React from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";

function Thumbnail(props) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const timeOptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
        const dateOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        };
        const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
        return `${formattedTime}, ${formattedDate}`;
    };

    return (
        <div className='text-slate-600 flex flex-col bg-white rounded-lg p-2 sm:p-2 shadow-md'>
            <div className='flex flex-col'>
                <div className='flex pl-2'>
                    <div className='w-[9%]'>
                        <img className='w-fit'
                            src={props.profile_pic}
                            alt="Author"
                        />
                    </div>
                    <div className='flex pl-3 text-xs font-semibold w-[20%]'>
                        <div>
                            <h2 className='text-nowrap'>{props.author}</h2>
                            <p className='text-nowrap'>Noob</p>
                            <p className='text-nowrap'>{formatDate(props.date)}</p>
                        </div>
                    </div>
                    <div className='w-[40%] text-gray-800 text-md font-medium sm:text-lg xs:font-bold flex items-center justify-end'>
                        <div className='w-fit bg-slate-300 rounded-xl p-2 xs:p-2'>
                            <h1 className=''>Idea</h1>
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <div className='flex flex-col space-y-1 pt-1'>
                            <div className='flex gap-x-3 sm:gap-x-6 items-center justify-end'>
                                <div className='flex gap-x-[3px]'>
                                    <span className='font-medium text-sm'>100</span>
                                    <span>
                                        <AiFillLike
                                            className='text-blue-500 h-4 w-4 mt-[2px]'
                                        />
                                    </span>
                                </div>
                                <div className='flex gap-x-[3px]'>
                                    <span className='font-medium text-sm'>23</span>
                                    <span>
                                        <AiFillDislike
                                            className='text-red-500 h-4 w-4 mt-[2px]'
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className='flex justify-end text-right'>
                                <span className='font-medium text-sm underline underline-offset-2'>8 comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center pt-1 px-2 w-full'>
                    <h1 className='font-bold text-lg sm:text-lg'>{props.title}</h1>
                </div>
            </div>
            <div className='px-2 pb-1'>
                <p className='text-sm'>{props.description}</p>
            </div>

        </div>
    );
}

export default Thumbnail;
