import React, { useState } from 'react';
import profile1 from "../assets/defaults/user1_solid.png";
import { AiOutlineClose } from 'react-icons/ai';
import API_URL from '../config';
import { Link } from 'react-router-dom'
// import { FaRegUser } from "react-icons/fa";
import LOGIN_MODE from '../enums/enums';

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
        <div className={nav ? 'z-50 fixed right-0 top-0 w-[50%] sm:w-[50%] md:w-[45%] lg:w-[35%] h-full shadow-2xl border-r border-l-gray-900 bg-mygray ease-in-out duration-500' : 'fixed right-[-100%]'}>
            <div onClick={handleProfileClick} className='pt-4 pl-4'>
                <AiOutlineClose size={30} />
            </div>
            <div className='flex justify-center py-4 md:pt-4'>
                <button onClick={handleProfileClick}>
                    {userData ?
                        <img className='w-max max-w-[90px] sm:max-w-[140px]'
                            src={profile1}
                            alt="profile"
                        />
                        :
                        <div className='hover:cursor-pointer p-1 bg-white text-myblack rounded-full text-nowrap'>
                            <img className='w-full max-w-[100px]'
                                src={profile1}
                                alt="profile"
                            />
                        </div>
                    }
                </button>
            </div>
            <ul className='p-0 sm:p-4 uppercase'>
                {!userData ? <li className='border-b border-gray-600 text-mygreen font-bold'><div className='p-4 hover:cursor-pointer hover:underline' onClick={() => { openLoginModal(LOGIN_MODE.login) }}>Log In</div></li> : null}
                <li className='border-b border-gray-600'><Link className='inline-block w-full p-4 hover:cursor-pointer hover:underline' to="/">Home</Link></li>
                <li className='border-b border-gray-600'><Link className='inline-block w-full p-4 hover:cursor-pointer hover:underline' to="/stats">Stats</Link></li>
                <li className='border-b border-gray-600'><Link className='inline-block w-full p-4 hover:cursor-pointer hover:underline' to="/forums">Forums</Link></li>
                <li className='border-b border-gray-600'><Link className='inline-block w-full p-4 hover:cursor-pointer hover:underline' to="/store">Store</Link></li>
                <li className='border-b border-gray-600'><Link className='inline-block w-full p-4 hover:cursor-pointer hover:underline' to="/store">Contact</Link></li>
                {userData ? <li className='text-mygreen font-bold text-nowrap'><div className='p-4 hover:cursor-pointer hover:underline' onClick={handleLogout}>Log Out</div></li> : null}
            </ul>
        </div >

    return (
        <div className='flex justify-between items-center h-28 max-w-[1240px] mx-auto px-4 text-white '>
            <h1 className='text-3xl font-bold text-mygreen sm:inline'>{userData ? userData.userName : 'VanaByte'}</h1>
            <ul className="flex font-medium items-center space-x-0 sm:space-x-6 text-2xl uppercase">
                <li className='hidden sm:block'><Link className='p-3 hover:underline' to="/">Home</Link></li>
                <li className='hidden sm:block'><Link className='p-3 hover:underline' to="/stats">Stats</Link></li>
                <li className='hidden sm:block'><Link className='p-3 hover:underline' to="/forums">Forums</Link></li>
                <li className='hidden sm:block'><Link className='p-3 hover:underline' to="/store">Store</Link></li>
                <li className='hidden sm:block'><Link className='p-3 hover:underline' to="/store">Contact</Link></li>
            </ul>
            {userData ? <div className='hover:cursor-pointer'>
                <button onClick={handleProfileClick}>
                    <img className='w-max max-w-[60px]'
                        src={profile1}
                        alt="profile"
                    />
                </button>
            </div> :
                <div className='hover:cursor-pointer'>
                    <button onClick={handleProfileClick}>
                        <img className='w-max max-w-[60px]'
                            src={profile1}
                            alt="profile"
                        />
                    </button>
                </div>
            }
            {sideBar}
        </div>
    );
}

export default Navbar;
