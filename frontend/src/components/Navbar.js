import React, { useState } from 'react';
import logo from "../assets/logos/android-chrome-512x512.png"
import { AiOutlineClose } from 'react-icons/ai';
import API_URL from '../config';
import { Link } from 'react-router-dom'
import { FaHome, FaStore } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { MdForum } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import LOGIN_MODE from '../enums/login_mode';
import { getProfilePicture } from '../enums/profle_picture';
import hamburger from '../assets/hamburger.png'

function Navbar({ userData, openLoginModal, noShadow }) {
    const [nav, setNav] = useState(false);

    const handleMenuToggle = () => { setNav(!nav); };

    const handleProfileClick = () => {
        //go to profile page
    }

    const handleLogout = async () => {
        try {
            const logoutResponse = await fetch(`${API_URL}logout`, {
                method: "GET",
                credentials: 'include'
            });
            console.log(logoutResponse);
            window.location.reload(true);
        } catch (err) {
            console.error(err.message);
        }
    };

    const sideBar =
        <div className={nav ? 'text-mywhite z-50 fixed right-0 top-0 w-[50%] sm:w-[50%] md:w-[45%] lg:w-[35%] h-full shadow-2xl border-r border-l-gray-900 bg-mygray ease-in-out duration-500' : 'fixed right-[-100%]'}>
            <div className='flex items-center'>
                <div onClick={handleMenuToggle} className='p-4 hover:cursor-pointer'>
                    <AiOutlineClose size={30} />
                </div>
                <div className='w-full text-right p-4'>
                    <p className='italic text-lg'>{userData ? userData.username : ''}</p>
                </div>
            </div>

            <div className='flex justify-center pb-0 pt-0'>
                <button onClick={handleProfileClick}>
                    {userData ?
                        <img className='w-max max-w-[90px] sm:max-w-[140px]'
                            src={getProfilePicture(userData.profile)}
                            alt="Icon For Menu"
                        />
                        :
                        null
                    }
                </button>
            </div>
            <ul className='p-0 uppercase'>
                {!userData ? <li className='border-b border-gray-600 text-mygreen font-bold'><div className='p-4 hover:cursor-pointer hover:underline' onClick={() => { openLoginModal(LOGIN_MODE.login) }}>Log In</div></li> : null}
                <li className='border-b border-gray-600'><Link className='inline-block w-full p-4 hover:cursor-pointer hover:underline' to="/">Home</Link></li>
                <li className='border-b border-gray-600'><Link className='inline-block w-full p-4 hover:cursor-pointer hover:underline' to="/stats">Stats</Link></li>
                <li className='border-b border-gray-600'><Link className='inline-block w-full p-4 hover:cursor-pointer hover:underline' to="/forums">Forums</Link></li>
                <li className='border-b border-gray-600'><Link className='inline-block w-full p-4 hover:cursor-pointer hover:underline' to="/store">Store</Link></li>
                <li className='border-b border-gray-600'><Link className='inline-block w-full p-4 hover:cursor-pointer hover:underline' to="/contact">Contact</Link></li>
                {userData ? <li className='text-mygreen font-bold text-nowrap'><div className='p-4 hover:cursor-pointer hover:underline' onClick={handleLogout}>Log Out</div></li> : null}
            </ul>
        </div >

    return (
        <div className={`relative z-[100] px-3 grid grid-cols-11 justify-center items-center h-10 xs:h-14 mx-auto text-myblack ${noShadow ? '' : 'shadow-md'}`} >
            <div className='pr-0 md:pr-[10%] flex flex-nowrap justify-start col-span-2'>
                <div>
                    <Link className='' to="/"><img className='w-[35px] min-w-[35px]' src={logo} alt="logo"></img></Link>
                </div>
                <div className="pl-2 flex items-center relative">
                    <input className='px-2 w-full rounded-xl bg-gray-100 focus:border-mygreen focus:shadow-2xl focus:border-2 focus:outline-none'></input>
                    <FaMagnifyingGlass className='absolute left-3 text-gray-300'></FaMagnifyingGlass>
                </div>
            </div>
            <div className='px-2 md:px-20 text-mywhite col-span-7 h-full flex items-center'>
                <ul className="flex items-center mx-auto w-full font-medium text-xs xs:text-md justify-center space-x-[5%] md:space-x-12 uppercase">
                    <li className=''>
                        <Link className='hover:underline flex flex-col items-center' to="/">
                            <FaHome className='w-5 h-5 xs:w-6 xs:h-6'></FaHome>
                            <h1>Home</h1>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='hover:underline flex flex-col items-center' to="/stats">
                            <IoIosStats className='w-5 h-5 xs:w-6 xs:h-6'></IoIosStats>
                            <h1>Stats</h1>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='hover:underline flex flex-col items-center' to="/forums">
                            <MdForum className='w-5 h-5 xs:w-6 xs:h-6'></MdForum>
                            <h1>Forums</h1>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='hover:underline flex flex-col items-center' to="/store">
                            <FaStore className='w-5 h-5 xs:w-6 xs:h-6'></FaStore>
                            <h1>Store</h1>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='hover:underline flex flex-col items-center' to="/contact">
                            <MdPhoneInTalk className='w-5 h-5 xs:w-6 xs:h-6'></MdPhoneInTalk>
                            <h1>Contact</h1>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='col-span-2 hover:cursor-pointer flex justify-end items-center'>
                {userData ?
                    <button onClick={handleMenuToggle}>
                        <img className='w-max max-w-[35px] xs:max-w-[35px]' src={getProfilePicture(userData.profile)} alt="Icon For Menu" />
                    </button>
                    :
                    <button onClick={handleMenuToggle}>
                        <img className='w-max max-w-[25px] xs:max-w-[25px]' src={hamburger} alt="Icon For Menu" />
                    </button>
                }
            </div>
            {sideBar}
        </div >
    );
}

export default Navbar;
