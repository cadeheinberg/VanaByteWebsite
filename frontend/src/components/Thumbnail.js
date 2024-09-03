import React from 'react';

function Thumbnail(props) {
    return (
        <div className='bg-white rounded-lg p-3 shadow-lg'>
            <div className='flex'>
                <div className='w-[35%] flex justify-center items-center'>
                    <img className='w-full p-3'
                        src={props.profile_pic}
                        alt="Author"
                    />
                </div>
                <div className='p-4 text-right w-full'>
                    <h1 className='font-bold'>{props.title}</h1>
                    <h2>{props.author}</h2>
                    <p>{props.date}</p>
                </div>
            </div>
            <p>{props.description}</p>
        </div>
    );
}

export default Thumbnail;
