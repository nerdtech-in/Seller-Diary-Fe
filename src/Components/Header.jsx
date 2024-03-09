import React from 'react'
import { BsBag } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
export default function Header({
    title
}) {
    const navigate = useNavigate()
    return (
        <div
            className='h-[8%] w-full bg-white  py-3 flex justify-around items-center sticky top-0'
        >
            <div
            className='h-[30px] w-[30px]'
            />
            <p
                className='text-2xl  tracking-widest font-Title font-black  text-black '
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
