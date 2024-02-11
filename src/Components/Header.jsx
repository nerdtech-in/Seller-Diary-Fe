import React from 'react'
import { BsBag } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
export default function Header({
    title
}) {
    const navigate = useNavigate()
    return (
        <div
            className='h-[8%]  pt-3 flex justify-around items-center'
        >
            <div
            className='h-[30px] w-[30px]'
            />

            <p
                className='text-2xl  tracking-widest font-semibold font-Raleway  text-icon '
            >{title}</p>
            <BsBag
                onClick={()=>{
                    navigate('/cart')
                }}
                className=' text-icon'
                size={25}
            />
        </div>
    )
}
