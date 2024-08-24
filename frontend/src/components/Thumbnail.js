import React from 'react';
import { useInView } from 'react-intersection-observer';

function Thumbnail(props) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`w-[100%] md:w-[50%] py-4 sm:px-4 lg:p-6 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className='bg-slate-50 rounded-2xl p-2 shadow-md'>
                <div className='flex'>
                    <img
                        className='p-2'
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
        </div>
    );
}

export default Thumbnail;
