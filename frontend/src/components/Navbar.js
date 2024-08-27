import React, { Fragment, useState } from 'react'
import profile1 from "../assets/s1.svg";
import { AiOutlineClose } from 'react-icons/ai'

function Navbar({ userData }) {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        //if the window size is greater than 1240 pixels ignore?
        setNav(!nav);
    }

    const profile_login = userData ?
        <Fragment>
            <h1 className='w-full text-3xl font-bold text-mygreen'>{userData.userName}</h1>
            <ul className="flex font-medium">
                <li className='p-4 pt-5 hidden sm:block'>Home</li>
                <li className='p-4 pt-5 hidden sm:block'>Public</li>
                <li className='p-4 pt-5 hidden sm:block'>MyNotes</li>
                <li className='pl-2'>
                    <button onClick={handleNav}>
                        <img className='w-max max-w-[60px]'
                            src={profile1}
                            alt="profile"
                        />
                    </button>
                </li>
            </ul>
        </Fragment>
        :
        <Fragment>
            <h1 className='w-full text-3xl font-bold text-mygreen'>OnePage</h1>
            <ul className="flex font-medium">
                <li className='p-4 hidden sm:block'>Home</li>
                <li className='p-4 hidden sm:block'>Public</li>
                <li className='p-4 bg-white  text-myblack rounded-lg text-nowrap'>Log In</li>
            </ul>
        </Fragment>;


    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
            {profile_login}
            <div className={nav ? 'z-50 fixed right-0 top-0 w-[50%] sm:w-[50%] md:w-[45%] lg:w-[35%] h-full shadow-2xl border-r border-l-gray-900 bg-mygray ease-in-out duration-500' : 'fixed right-[-100%]'}>
                <div onClick={handleNav} className='pt-4 pl-4'>
                    <AiOutlineClose size={30} />
                </div>
                <div className='flex justify-center py-4 md:pt-4'>
                    <button onClick={handleNav}>
                        <img className='w-max max-w-[100px] md:max-w-[130px]'
                            src={profile1}
                            alt="profile"
                        />
                    </button>
                </div>
                <ul className='p-0 sm:p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>My Notes</li>
                    <li className='p-4 border-b border-gray-600'>Public</li>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 text-nowrap'>Log Out</li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar;
