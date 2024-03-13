import React from 'react'
import { BsBag } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Header({
    title
}) {
    const navigate = useNavigate()
    const cart = useSelector(state=>state.Reducers.cart)
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
            <div className='flex'>
                <p
                    className='text-[10px] flex justify-center items-center bg-primary rounded-full h-[15px] w-[15px] font-Raleway font-black  text-white '
                >{cart?.length}</p>
                <BsBag
                    onClick={() => {
                        navigate('/cart')
                    }}
                    className=' text-black'
                    size={25}
                />
            </div>

        </div>
    )
}
