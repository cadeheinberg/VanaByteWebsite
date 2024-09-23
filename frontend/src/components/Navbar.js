import React, { useState } from 'react';
import profile1 from "../assets/defaults/user1_solid.png";
import { AiOutlineClose } from 'react-icons/ai';
import API_URL from '../config';
import { Link } from 'react-router-dom'
import { FaHome, FaStore } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { MdForum } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import LOGIN_MODE from '../enums/login_mode';

function Navbar({ userData, openLoginModal }) {
    const [nav, setNav] = useState(false);

    const handleProfileClick = () => { setNav(!nav); };

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
                <div onClick={handleProfileClick} className='p-4 hover:cursor-pointer'>
                    <AiOutlineClose size={30} />
                </div>
                <div className='w-full text-right p-4'>
                    <p className='italic text-2xl'>{userData ? userData.userName : ''}</p>
                </div>
            </div>

            <div className='flex justify-center pb-0 pt-0'>
                <button onClick={handleProfileClick}>
                    {userData ?
                        <img className='w-max max-w-[90px] sm:max-w-[140px]'
                            src={profile1}
                            alt="profile"
                        />
                        :
                        <img className='w-max max-w-[90px] sm:max-w-[140px]'
                            src={profile1}
                            alt="profile"
                        />
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
        <div className='grid grid-cols-7 justify-center items-center h-20 xs:h-28 max-w-[1000px] mx-auto text-myblack'>
            <div className='px-2 hidden md:inline-block col-span-1'>
                <Link className='text-xl xs:text-2xl font-bold text-mygreen text-nowrap' to="/"><h1>VanaByte</h1></Link>
            </div>
            <div className='px-2 md:px-10 text-mywhite col-span-6 md:col-span-5 h-full flex items-center'>
                <ul className="flex items-center mx-auto w-full font-bold text-sm xs:text-lg justify-between uppercase">
                    <li className=''>
                        <Link className='hover:underline flex flex-col items-center' to="/">
                            <FaHome className='w-5 h-5 xs:w-8 xs:h-8'></FaHome>
                            <h1>Home</h1>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='hover:underline flex flex-col items-center' to="/stats">
                            <IoIosStats className='w-5 h-5 xs:w-8 xs:h-8'></IoIosStats>
                            <h1>Stats</h1>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='hover:underline flex flex-col items-center' to="/forums">
                            <MdForum className='w-5 h-5 xs:w-8 xs:h-8'></MdForum>
                            <h1>Forums</h1>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='hover:underline flex flex-col items-center' to="/store">
                            <FaStore className='w-5 h-5 xs:w-8 xs:h-8'></FaStore>
                            <h1>Store</h1>
                        </Link>
                    </li>
                    <li className=''>
                        <Link className='hover:underline flex flex-col items-center' to="/contact">
                            <CiMail className='w-5 h-5 xs:w-8 xs:h-8'></CiMail>
                            <h1>Contact</h1>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='col-span-1 hover:cursor-pointer flex justify-end items-center'>
                {userData ?
                    <button onClick={handleProfileClick}>
                        <img className='w-max max-w-[35px]'
                            src={profile1}
                            alt="profile"
                        />
                    </button>
                    :
                    <button onClick={handleProfileClick}>
                        <img className='w-max max-w-[35px]'
                            src={profile1}
                            alt="profile"
                        />
                    </button>}
            </div>
            {sideBar}
        </div >
    );
}

export default Navbar;
