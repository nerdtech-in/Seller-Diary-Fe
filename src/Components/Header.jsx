import React from 'react'

export default function Header({
    title
}) {
    return (
        <div
            className='h-[8%]  pt-3 flex justify-center items-center'
        >
            <p
                className='text-2xl  tracking-widest font-semibold font-Raleway  text-icon '
            >{title}</p>
        </div>
    )
}
