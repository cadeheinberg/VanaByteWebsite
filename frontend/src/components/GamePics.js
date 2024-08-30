import React from 'react'
import airbender from '../assets/airbender.png'
import beserker from '../assets/beserker.png'
import scorch from '../assets/scorch.png'
import goblin from '../assets/goblin.png'
import igor from '../assets/igor.png'
import summo from '../assets/summo.png'
import grief from '../assets/grief.png'
import { FaAngleUp } from "react-icons/fa";

// /teleport @e[type=armor_stand,name=Grief] -1034.5 205.1 12.5 facing -1034.5 205.1 11.5
// /teleport @e[type=armor_stand,name=Summo] Finea
// /teleport Finea -1036.155 204.55 10.08 -35.1 9.9

function GamePics() {
    return (
        <div className='w-full pt-[7rem] pb-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='text-myblack text-6xl font-bold text-center mb-10 pb-2 pt-2 mx-10'>KIT PVP</h1>
                <div className='relative p-8 bg-white rounded-md '>
                    {/* <button className='absolute left-2 bottom-[50%] bg-slate-800'>
                        <FaAngleUp className='rotate-[270deg]' color='white' size={40} />
                    </button>
                    <button className='absolute right-2 bottom-[50%] bg-slate-800'>
                        <FaAngleUp className='rotate-[90deg]' color='white' size={40} />
                    </button> */}
                    <div className='flex justify-center flex-wrap'>
                        <div className='w-[19%] p-2 flex justify-center items-end hover:scale-110 duration-500'>
                            <img className='shadow-xl rounded-full ' src={airbender} alt='/' />
                        </div>
                        <div className='w-[33%] p-2 flex justify-center items-center hover:scale-110 duration-500'>
                            <img className='shadow-xl rounded-full ' src={beserker} alt='/' />
                        </div>
                        <div className='w-[23%] p-2 flex justify-center items-end hover:scale-110 duration-500'>
                            <img className='shadow-xl rounded-full ' src={scorch} alt='/' />
                        </div>
                        <div className='w-[28%] p-2 flex justify-center items-center hover:scale-110 duration-500'>
                            <img className='shadow-xl rounded-full ' src={goblin} alt='/' />
                        </div>
                        <div className='w-[20%] p-2 flex justify-center items-start hover:scale-110 duration-500'>
                            <img className='shadow-xl rounded-full ' src={igor} alt='/' />
                        </div>
                        <div className='w-[33%] p-2 flex justify-center items-center hover:scale-110 duration-500'>
                            <img className='shadow-xl rounded-full ' src={summo} alt='/' />
                        </div>
                        <div className='w-[18%] p-2 flex justify-center items-start hover:scale-110 duration-500'>
                            <img className='shadow-xl rounded-full ' src={grief} alt='/' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default GamePics