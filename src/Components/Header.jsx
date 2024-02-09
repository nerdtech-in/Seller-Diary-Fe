import React from 'react'

export default function Header({
    title
}) {
    return (
        <div
            className='h-[8%]  mt-3 flex justify-center items-center'
        >
            <p
                className='text-2xl  tracking-widest font-Raleway  text-gray-900 dark:text-white'
            >{title}</p>
        </div>
    )
}
