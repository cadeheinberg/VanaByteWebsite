import React from 'react'
// import { FaAngleUp } from "react-icons/fa";

// /teleport @e[type=armor_stand,name=Grief] -1034.5 205.1 12.5 facing -1034.5 205.1 11.5
// /teleport @e[type=armor_stand,name=Summo] Finea
// /teleport Finea -1036.155 204.55 10.08 -35.1 9.9

function GamePics() {
    return (
        <div className='w-full pt-[7rem] pb-[10rem] px-4 bg-mywhite'>
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='text-myblack text-6xl font-bold text-center mb-10 pb-2 pt-2 mx-10'>KIT PVP</h1>
                <div className='relative p-8 bg-mywhite rounded-md '>
                    {/* <button className='absolute left-2 bottom-[50%] bg-slate-800'>
                        <FaAngleUp className='rotate-[270deg]' color='white' size={40} />
                    </button>
                    <button className='absolute right-2 bottom-[50%] bg-slate-800'>
                        <FaAngleUp className='rotate-[90deg]' color='white' size={40} />
                    </button> */}
                </div>
            </div>
        </div >
    )
}

export default GamePics