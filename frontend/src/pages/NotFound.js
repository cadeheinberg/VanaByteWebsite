import React, { useEffect } from 'react';
import { IoIosSad } from "react-icons/io";

function NotFound() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='mt-10 p-3 bg-mygray max-w-[600px] flex flex-col justify-center items-center'>
            <h1 className='text-white text-2xl font-medium'>404 - Page Not Found!</h1>
            <IoIosSad className='text-mygreen h-min w-min min-h-[70%] min-w-[70%]'></IoIosSad>
        </div>
    )
}

export default NotFound