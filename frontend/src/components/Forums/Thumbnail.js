import React from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import categories from './Categories';
import profile1 from "../../assets/defaults/user1_solid.png";

function Thumbnail({ forumPost }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        // const timeOptions = {
        //     hour: 'numeric',
        //     minute: 'numeric',
        //     hour12: true,
        // };
        // const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
        const dateOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        };
        const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
        return `${formattedDate}`;
        // return `${formattedTime}, ${formattedDate}`;
    };

    return (
        <div className='text-slate-600 flex flex-col bg-white rounded-lg p-2 py-2 xs:p-2 shadow-md'>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div className='w-[20%] xs:w-[50px] xs:min-w-[50px]'>
                        <img className='w-fit'
                            src={profile1}
                            alt="Author"
                        />
                    </div>
                    <div className='flex pl-3 text-xs font-semibold w-[40%]'>
                        <div>
                            <h2 className='text-nowrap'>{forumPost.username}</h2>
                            <p className='text-nowrap'>Noob</p>
                            <p className='text-nowrap'>{formatDate(forumPost.date)}</p>
                        </div>
                    </div>
                    <div className='w-full text-gray-800 text-md font-medium sm:text-lg xs:font-bold flex items-center justify-end'>
                        <div className='w-fit bg-slate-300 rounded-xl p-2 xs:p-2'>
                            <h1 className=''>{categories.find(cat => cat.key === forumPost.category)?.label || "General"}</h1>
                        </div>
                    </div>
                </div>
                <div className='flex items-center pt-1 w-full'>
                    <h1 className='font-bold text-lg sm:text-lg'>{forumPost.title}</h1>
                </div>
            </div>
            <div className='pb-1 border-b-[1px]'>
                <p className='text-sm'>{forumPost.description.substring(0, 100)}</p>
            </div>
            <div className='flex flex-row pt-2'>
                <div className='flex gap-x-3 sm:gap-x-6'>
                    <div className='flex gap-x-[3px]'>
                        <span>
                            <AiFillLike
                                className='text-blue-500 h-5 w-5 mt-[2px]'
                            />
                        </span>
                        <span className='font-medium text-md'>{forumPost.likes}</span>
                    </div>
                    <div className='flex gap-x-[3px]'>
                        <span>
                            <AiFillDislike
                                className='text-red-500 h-5 w-5 mt-[2px]'
                            />
                        </span>
                        <span className='font-medium text-md'>{forumPost.dislikes}</span>

                    </div>
                </div>
                <div className='w-full flex justify-end items-center text-right'>
                    <span className='font-medium text-sm underline underline-offset-2'>0 comments</span>
                </div>
            </div>
        </div>
    );
}

export default Thumbnail;
