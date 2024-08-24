import React from 'react'

function Footer() {
    return (
        <div className='flex flex-col sm:flex-row pl-6 sm:px-10 justify-between space-y-5 sm:space-y-0 text-white pt-10 pb-20 max-w-[800px] mx-auto'>
            <ul>
                <li>Cade Heinberg</li>
                <li className='italic'>cadeheinberg@outlook.com</li>
            </ul>
            <ul>
                <li className='uppercase text-mygreen'>Powered By</li>
                <li>REACT, TailWindCSS</li>
                <li>Lottie, react-svg, react-intersection-observer</li>
                <li>NodeJS, Express, Cors, MySQL, JWT, Bcrypt</li>
            </ul>
        </div>
    )
}

export default Footer