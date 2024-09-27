import React from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import categories from './Categories';
import { getProfilePicture } from '../../enums/profle_picture';
import { Link } from 'react-router-dom'
import { formatDate } from '../../enums/date_format';

function Thumbnail({ forumPost }) {

    return (
        <Link to={`/forum/post/${forumPost.post_id}`} className='text-slate-600 flex flex-col bg-white rounded-lg p-2 py-2 xs:p-2 shadow-md'>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div className='w-min min-w-[14%] xs:min-w-[50px]'>
                        <img className='w-fit'
                            src={getProfilePicture(forumPost.profile)}
                            alt="Author"
                        />
                    </div>
                    <div className='flex pl-3 text-xs font-semibold w-min min-w-[60%]'>
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
                <p className='text-sm'>{forumPost.description.substring(0, 150) + "..."}</p>
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
        </Link>
    );
}

export default Thumbnail;
