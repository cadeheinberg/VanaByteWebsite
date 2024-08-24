import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-mygreen'>NoteTaker</h1>
            <ul className="hidden md:flex">
                <li className='p-4'>Home</li>
                <li className='p-4'>Public</li>
                <li className='p-4'>Contact</li>
                <li className='p-4 text-nowrap'>Log In</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {
                    //if nav is false                    //else
                    !nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />
                }
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-myblack ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-mygreen m-4 mt-8'>NoteTaker</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>Public</li>
                    <li className='p-4 border-b border-gray-600'>Contact</li>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 text-nowrap'>Log In</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
