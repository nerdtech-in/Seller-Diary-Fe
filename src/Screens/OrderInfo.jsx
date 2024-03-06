import React from 'react'
import { BsBag } from 'react-icons/bs'
import { IoMdArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export default function OrderInfo() {
    const navigate = useNavigate()
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
                    <h1 class="text-2xl font-semibold font-Title text-black">Order Info</h1>
                    <BsBag
                        onClick={() => {
                            navigate('/cart')
                        }}
                        className=' text-icon'
                        size={25}
                    />
                </div>
            </div>
        </div>
    )
}
