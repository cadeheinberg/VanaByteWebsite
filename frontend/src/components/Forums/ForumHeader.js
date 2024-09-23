import React from 'react'
import EDITOR_MODE from '../../enums/editor_mode'
// import { FaPlus } from "react-icons/fa6";

function ForumHeader({ userData, openLoginModal, openPostEditor, setPostEditorMode }) {

    const handleNewPostClick = () => {
        if (userData == null) {
            openLoginModal();
        } else {
            setPostEditorMode(EDITOR_MODE.create);
            openPostEditor();
        }
    }

    return (
        <div className='bg-mywhite pb-1 pt-10'>
            <div className='flex rounded-xl w-full max-w-[600px] px-2 xs:px-4 mx-auto text-md font-medium sm:text-lg xs:font-bold'>
                <div className='flex text-gray-800 justify-center gap-x-[7px] sm:gap-x-2'>
                    <button className='bg-slate-300 rounded-xl h-fit hover:scale-110 duration-300 p-2 xs:p-2'>
                        <h1 className=''>All</h1>
                    </button>
                    <button className='bg-slate-300 rounded-xl h-fit hover:scale-110 duration-300 p-2 xs:p-2'>
                        <h1 className=''>Friends</h1>
                    </button>
                    <button className='bg-slate-300 rounded-xl h-fit hover:scale-110 duration-300 p-2 xs:p-2'>
                        <h1 className=''>Idea</h1>
                    </button>
                    <button className='bg-slate-300 rounded-xl h-fit hover:scale-110 duration-300 p-2 xs:p-2'>
                        <h1 className=''>Help</h1>
                    </button>
                </div>
                <div className='flex justify-end items-center w-full'>
                    <button className='bg-mygreen h-fit hover:scale-110 duration-300 p-2 xs:p-2' onClick={handleNewPostClick}>
                        <h1 className='text-white'>New Post</h1>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default ForumHeader