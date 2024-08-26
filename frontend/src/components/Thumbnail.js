import React from 'react';

function Thumbnail(props) {
    return (
        <div className='bg-white rounded-lg p-2 shadow-lg'>
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
    );
}

export default Thumbnail;
