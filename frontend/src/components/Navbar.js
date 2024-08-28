import React, { Fragment, useState } from 'react';
import profile1 from "../assets/s1.svg";
import { AiOutlineClose } from 'react-icons/ai';
import LOGIN_MODE from '../enums/enums';
import API_URL from '../config';
import { Link } from 'react-router-dom'

function Navbar({ userData, openLoginModal }) {
    const [nav, setNav] = useState(false);

    const handleNav = () => { setNav(!nav); };
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

    const profileLogin = userData ? (
        <Fragment>
            <h1 className='w-full text-3xl font-bold text-mygreen hidden sm:inline'>{userData.userName}</h1>
            <ul className="flex font-medium">
                <li className='p-4 pt-5 hidden sm:block'><Link className='hover:underline' to="/">Store</Link></li>
                <li className='p-4 pt-5 hidden sm:block'><Link className='hover:underline' to="/stats">Stats</Link></li>
                <li className='p-4 pt-5 hidden sm:block'><Link className='hover:underline' to="/forums">Forums</Link></li>
                <li className='pl-2'>
                    <button onClick={handleNav}>
                        <img className='w-max max-w-[60px]'
                            src={profile1}
                            alt="profile"
                        />
                    </button>
                </li>
            </ul >
        </Fragment >
    ) : (
        <Fragment>
            <h1 className='w-full text-3xl font-bold text-mygreen hidden sm:inline'>VanaByte</h1>
            <ul className="flex font-medium">
                <li className='p-4 pt-5 block'><Link className='hover:underline' to="/">Store</Link></li>
                <li className='p-4 pt-5 block'><Link className='hover:underline' to="/stats">Stats</Link></li>
                <li className='p-4 pt-5 block'><Link className='hover:underline' to="/forums">Forums</Link></li>
                <li className='p-4 bg-white  text-myblack rounded-lg text-nowrap' onClick={() => { openLoginModal(LOGIN_MODE.login) }}>Log In</li>
            </ul>
        </Fragment>
    );

    const sideBar =
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
                <li className='p-4 border-b border-gray-600'><Link className='hover:underline' to="/">Store</Link></li>
                <li className='p-4 border-b border-gray-600'><Link className='hover:underline' to="/stats">Stats</Link></li>
                <li className='p-4 border-b border-gray-600'><Link className='hover:underline' to="/forums">Forums</Link></li>
                <li className='p-4 text-nowrap' onClick={handleLogout}>Log Out</li>
            </ul>
        </div>

    return (
        <div className='flex justify-center sm:justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
            {profileLogin}
            {sideBar}
        </div>
    );
}

export default Navbar;
