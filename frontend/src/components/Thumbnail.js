import React from 'react'

function Thumbnail(props) {

    //onclick go to props.noteid
    return (
        <div className='w-[90%] sm:w-[50%] p-4'>
            <div className='bg-slate-50 rounded-2xl p-2 shadow-md'>
                <div className='flex'>
                    <img className='p-2'
                        src={props.profile_pic}
                        alt="Author"
                        style={{ width: '100px', height: '100px' }}
                    />
                    <div className='p-4 text-right w-full'>
                        <h1 className='font-bold'>{props.title}</h1>
                        <h2>{props.author}</h2>
                        <p>{props.date}</p>
                    </div>
                </div>
                <p>{props.description}</p>
            </div>
        </div >
    )
}

export default Thumbnail