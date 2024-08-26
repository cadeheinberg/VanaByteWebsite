import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

function Footer() {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-mygreen'>NoteTaker</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h2 className='font-medium text-gray-400'>Front End</h2>
                    <ul>
                        <li className='py-2 text-sm'>REACT</li>
                        <li className='py-2 text-sm'>TailWindCSS CSS</li>
                        <li className='py-2 text-sm'></li>
                        <li className='py-2 text-sm'></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-medium text-gray-400'>Packages</h2>
                    <ul>
                        <li className='py-2 text-sm'>react-svg</li>
                        <li className='py-2 text-sm'>framer-motion</li>
                        <li className='py-2 text-sm'>react-typed</li>
                        <li className='py-2 text-sm'>lottie-react</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-medium text-gray-400'>Back End</h2>
                    <ul>
                        <li className='py-2 text-sm'>NodeJS</li>
                        <li className='py-2 text-sm'>Express</li>
                        <li className='py-2 text-sm'>Cors</li>
                        <li className='py-2 text-sm'>MySQL</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-medium text-gray-400'>Packages</h2>
                    <ul>
                        <li className='py-2 text-sm'>jsonwebtoken</li>
                        <li className='py-2 text-sm'>bcrypt</li>
                        <li className='py-2 text-sm'>cookie-parser</li>
                        <li className='py-2 text-sm'></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Footer