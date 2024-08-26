import React from 'react'

function NewsLetter() {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='sigma py-2'>Want to receive updates about NoteTaker?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            className='p-3 flex w-full rounded-md text-black'
                            type="email" placeholder='Enter Email'>
                        </input>
                        <button className='text-myblack bg-mygreen w-[200px] rounded-md font-medium my-6 sm:ml-4 sm:mx-auto py-3 px-6'>Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <a href='/' className='text-mygreen'>Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter