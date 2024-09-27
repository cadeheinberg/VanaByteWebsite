import React, { useEffect, useState, useRef } from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import categories from './Categories';
import { getProfilePicture } from '../../enums/profle_picture';
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../enums/date_format';
import { BiDotsVerticalRounded } from "react-icons/bi";
import 'react-toastify/dist/ReactToastify.css';

function Thumbnail({ forumPost }) {
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();
    const optionsRef = useRef(null);
    const optionsButton = useRef(null);

    const closeOptions = () => setShowOptions(false);

    useEffect(() => {
        //close options when user clicks outside of it
        const handleClickOutside = (event) => {
            if (optionsRef.current && (!optionsRef.current.contains(event.target) && !optionsButton.current.contains(event.target))) {
                closeOptions();
            }
        };

        if (showOptions) { document.addEventListener('mousedown', handleClickOutside); }

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showOptions]);

    const handlePostOptions = (event) => {
        //stops the event from triggering the root parent Link to forum post
        event.stopPropagation()
        setShowOptions(!showOptions)
    }

    const handlePostCard = (event) => {
        event.stopPropagation()
        navigate(`/forum/post/${forumPost.post_id}`)
    }

    const handleProfile = (event) => {
        event.stopPropagation()
        navigate(`/user/profile/${forumPost.author.web_uuid}`)
    }

    const handleCopyLink = async (event) => {
        event.stopPropagation()
        try {
            await navigator.clipboard.writeText(`/forum/post/${forumPost.post_id}`)
            alert("Copied Link to Clipboard")
        } catch (err) {
            console.error('Failed to copy link: ', err);
            alert("Failed to Copy Link")
        } finally {
            closeOptions();
        }
    }

    const handleReport = (event) => {
        event.stopPropagation()
        try {
            alert("Reporting Post")
        } catch (err) {
            console.error('Failed to copy link: ', err);
            alert("Failed to Report Post")
        } finally {
            closeOptions();
        }
    }

    const handleEdit = (event) => {
        event.stopPropagation()
        try {
            alert("Editing Post")
        } catch (err) {
            console.error('Failed to copy link: ', err);
            alert("Failed to Edit Post")
        } finally {
            closeOptions();
        }
    }

    const handleDelete = (event) => {
        event.stopPropagation()
        try {
            alert("Deleting Post")
        } catch (err) {
            console.error('Failed to copy link: ', err);
            alert("Failed to Delete Post")
        } finally {
            closeOptions();
        }
    }

    return (
        <div onClick={handlePostCard} className='hover:cursor-pointer relative text-slate-600 flex flex-col bg-white rounded-lg p-2 py-2 xs:p-2 shadow-md'>
            <div ref={optionsRef} className={showOptions ? 'z-10 top-6 right-6 absolute w-[30%] min-w-max ease-in-out duration-500 shadow-md bg-white rounded-md' : 'hidden'}>
                <ul className=''>
                    <li onClick={handleCopyLink} className='p-1 border-b-[1px] hover:bg-slate-50'>Copy Link</li>
                    <li onClick={handleProfile} className='p-1 border-b-[1px] hover:bg-slate-50'>View Profile</li>
                    <li onClick={handleReport} className='p-1 border-b-[1px] hover:bg-slate-50'>Report</li>
                    <li onClick={handleEdit} className={forumPost.authorized ? 'p-1 border-b-[1px] hover:bg-slate-50' : 'hidden'}>Edit</li>
                    <li onClick={handleDelete} className={forumPost.authorized ? 'p-1 border-b-[1px] hover:bg-slate-50' : 'hidden'}>Delete</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div onClick={handleProfile} className='w-min min-w-[14%] xs:min-w-[50px]'>
                        <img className='w-fit'
                            src={getProfilePicture(forumPost.author.profile)}
                            alt="Author"
                        />
                    </div>
                    <div className='flex items-start pl-3 text-xs font-semibold w-min min-w-[55%]'>
                        <div>
                            <h2 className='text-nowrap'>{forumPost.author.username}</h2>
                            <p className='text-nowrap'>Noob</p>
                            <p className='text-nowrap'>{formatDate(forumPost.date)}</p>
                        </div>
                    </div>
                    <div className='w-full text-gray-800 text-xs font-medium xs:text-xs xs:font-medium flex items-start justify-end'>
                        <div className='w-fit bg-slate-300 rounded-xl p-[6px] xs:p-2'>
                            <h1 className=''>{categories.find(cat => cat.key === forumPost.category)?.label || "General"}</h1>
                        </div>
                    </div>
                    <div ref={optionsButton} onClick={handlePostOptions} className='w-min min-w-[7%] flex items-start justify-end'>
                        <BiDotsVerticalRounded className='w-6 h-6 min-h-6 min-w-6'></BiDotsVerticalRounded>
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
        </div>
    );
}

export default Thumbnail;
