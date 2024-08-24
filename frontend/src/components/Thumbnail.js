import React from 'react';
import { motion } from 'framer-motion';

function Thumbnail(props) {
    return (
        <motion.div
            className='w-[100%] md:w-[50%] py-4 sm:px-4 lg:p-6'
            initial={{ opacity: 0, x: -100, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{
                type: 'spring',
                stiffness: 120,
                damping: 12,
                delay: 0, // delays each thumbnail slightly
                bounce: .5,
            }}
            whileHover={{ scale: 1.05 }} // slightly scale up on hover
            viewport={{ once: true, margin: '-50px 0px' }} // triggers when in view
        >
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
        </motion.div>
    );
}

export default Thumbnail;
