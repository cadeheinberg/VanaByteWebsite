import React from 'react'
import airbender from '../assets/airbender.png'
import { FaAngleUp } from "react-icons/fa";

// /teleport @e[type=armor_stand,name=Grief] -1034.5 205.1 12.5 facing -1034.5 205.1 11.5
// /teleport @e[type=armor_stand,name=Summo] Finea
// /teleport Finea -1036.155 204.55 10.08 -35.1 9.9

function GamePics() {
    return (
        <div className='w-full pt-[7rem] pb-[10rem] px-4 bg-white'>
            <div className='max-w-[800px] mx-auto'>
                <h1 className='text-myblack text-6xl font-bold text-center mb-10 pb-2 pt-2 mx-10'>KIT PVP</h1>
                <div className='relative shadow-lg p-8 bg-slate-900 rounded-md grid grid-cols-1 sm:grid-cols-2'>
                    <button className='absolute left-2 bottom-[50%] bg-slate-800'>
                        <FaAngleUp className='rotate-[270deg]' color='white' size={40} />
                    </button>
                    <button className='absolute right-2 bottom-[50%] bg-slate-800'>
                        <FaAngleUp className='rotate-[90deg]' color='white' size={40} />
                    </button>
                    <div className='col-span-1 flex justify-center items-center'>
                        <img className='w-[200px] sm:w-[80%] rounded-full ' src={airbender} alt='/' />
                    </div>
                    <div className='text-center col-span-1 font-medium text-gray-100 p-4 rounded-lg'>
                        <h2 className='text-3xl uppercase pb-3 font-bold'>Airbender</h2>
                        <ul className='text-md text-gray-400 font-bold uppercase'>
                            <li className='p-2 mb-2'>SPECIAL: Gust Wind</li>
                            <li className='p-2 mb-2'>MAIN: Use shield</li>
                            <li className='p-2 mb-2'>COST: Gust Wind</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default GamePics