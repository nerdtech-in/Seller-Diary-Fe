import React from 'react'
import { BsBag } from 'react-icons/bs'
import { IoMdArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import CartCard from '../Components/CartCard'
import { baseURL } from '../Helper/Helper'

export default function OrderInfo() {
    const navigate = useNavigate()
    const { state } = useLocation()
    console.log(state)
    const cart = useSelector(state => state.Reducers.cart)
    return (
        <div className='bg-white'>
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center px-3 justify-between py-3">
                    <IoMdArrowBack
                        onClick={() => {
                            navigate(-1)
                        }}
                        className=' text-primary'
                        size={25}
                    />
                    <h1 class="text-2xl font-semibold font-Title text-black">Order #{state?.id}</h1>
                    <div className='flex'>
                        <div
                            className='text-[10px] flex justify-center items-center bg-primary rounded-full h-[15px] w-[15px] font-Title font-black  text-white '
                        ><p>{cart?.length}</p></div>
                        <BsBag
                            onClick={() => {
                                navigate('/cart')
                            }}
                            className=' text-black'
                            size={25}
                        />
                    </div>
                </div>
                <div className='mt-2'>
                    {
                        state?.order?.map((item, index) => (
                            <div
                                className='w-full mt-2 py-2 px-2 rounded-md font-Title '
                            >
                                <div
                                    className='flex w-full justify-between items-center'>
                                    <img
                                        src={baseURL + item.icon}
                                        className='h-[60px] w-[60px] rounded-full ' />
                                    <div
                                        className=' flex items-start flex-col justify-evenly w-[60%]'>
                                        <p
                                            className="text-font-color text-base font-Raleway tracking-widest text-black bg-page-bg px-2 py-[1px] md:p-10 rounded"
                                        >
                                            {item?.item?.name}
                                        </p>
                                        <div className='flex space-x-1 font-semibold'>
                                            <p
                                                className="text-font-color text-sm text-icon tracking-widest pl-2 py-[1px]"
                                            >
                                                ₹{item?.item?.price}
                                            </p>
                                            <p
                                                className="text-font-color text-sm text-icon tracking-widest py-[1px]"
                                            >
                                                x {item?.quantity}
                                            </p>
                                            <p
                                                className="text-font-color text-base text-primary tracking-widest px-2 py-[1px]"
                                            >
                                                ₹{item?.item?.price * item?.quantity}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
