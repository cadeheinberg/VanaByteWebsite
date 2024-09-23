import React from 'react'
import kits from '../../assets/map/kits.png'
import arena from '../../assets/map/arena.png'
import ice from '../../assets/map/ice.png'
import cactus from '../../assets/map/cactus.png'
import under from '../../assets/map/under.png'

// /teleport @e[type=armor_stand,name=Grief] -1034.5 205.1 12.5 facing -1034.5 205.1 11.5
// /teleport @e[type=armor_stand,name=Summo] Finea
// /teleport Finea -1036.155 204.55 10.08 -35.1 9.9

function GamePics() {
    return (
        <div className='w-full pt-[7rem] pb-[10rem] bg-mywhite'>
            <div className='max-w-[800px] mx-auto px-2 xs:px-4'>
                <h1 className='text-myblack text-6xl font-bold text-center mb-10 pb-2 pt-2 mx-10'>KIT PVP</h1>
                <div className='pb-2'>
                    <img src={kits} alt='Kit PvP map' />
                </div>
                <div className='pb-2'>
                    <img src={arena} alt='Arena map' />
                </div>
                <div className='pb-2'>
                    <img src={ice} alt='Ice map' />
                </div>
                <div className='pb-2'>
                    <img src={cactus} alt='Cactus map' />
                </div>
                <div className='pb-2'>
                    <img src={under} alt='Underworld map' />
                </div>
            </div>
        </div >
    )
}

export default GamePics