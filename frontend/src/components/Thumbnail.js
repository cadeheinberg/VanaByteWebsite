import React from 'react';
import { motion } from 'framer-motion';

function Thumbnail(props) {
    return (
        <motion.div
            className='w-[100%] md:w-[50%] py-4 sm:px-4 lg:p-6'
            initial={{ opacity: 0, x: -100, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, margin: '-50px 0px' }}
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
