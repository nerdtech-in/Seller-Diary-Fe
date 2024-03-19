import React from 'react'
import { useNavigate } from 'react-router-dom'
import { baseURL } from '../Helper/Helper';
import { useDispatch } from 'react-redux';

export default function FoodCard({
    item,
}) {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0)
    const dispatch = useDispatch();
    return (
        <div
            className='w-full mt-2 py-2 px-2 rounded-md font-Raleway '
        >
            <div
                className='flex w-full justify-between items-center'>
                <img
                    src={baseURL + item.icon}
                    onClick={() => {
                        navigate('/info', {
                            state: item
                        })
                    }}
                    className='h-[60px] w-[60px] rounded-full ' />
                <div
                    onClick={() => {
                        navigate('/info', {
                            state: item
                        })
                    }}
                    className=' flex items-start flex-col justify-evenly w-[60%]'>
                    <p
                        className="text-font-color text-base tracking-widest text-black bg-page-bg px-2 py-[1px] md:p-10 rounded"
                    >
                        {item?.name}
                    </p>
                    <div className='flex space-x-1 font-semibold'>
                        <p
                            className="text-font-color text-sm text-icon tracking-widest pl-2 py-[1px]"
                        >
                            ₹{item?.price}
                        </p>
                        <p
                            className="text-font-color text-sm text-icon tracking-widest py-[1px]"
                        >
                            x {count}
                        </p>
                        <p
                            className="text-font-color text-sm text-primary tracking-widest px-2 py-[1px]"
                        >
                            ₹{item?.price * count}
                        </p>
                    </div>

                </div>
                <div
                    className=' flex flex-col justify-evenly space-y-2'>
                    <div className='flex space-x-2 justify-center items-center'>
                        <button
                            onClick={() => {
                                if (count > 1) {
                                    setCount(count - 1)
                                }
                            }}
                            className='bg-primary h-[25px] w-[25px] p-0 flex justify-center items-center rounded-full'
                        >
                            <p
                                className='text-white font-bold self-center font-Title'
                            >
                                -
                            </p>
                        </button>
                        <p
                            className='text-black font-bold self-center font-Title'
                        >
                            {count}
                        </p>
                        <button
                            onClick={() => {
                                setCount(count + 1)
                            }}
                            className='bg-primary h-[25px] w-[25px] p-0 flex justify-center items-center rounded-full'
                        >
                            <p
                                className='text-white font-bold self-center font-Title'
                            >
                                +
                            </p>
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            item['quantity'] = count
                            dispatch({
                                type: "ADD_TO_CART",
                                payload: item
                            })
                        }}
                        className='bg-primary rounded-lg '
                    >
                        <p
                            className='text-white text-[8px] py-[2px] font-bold self-center font-Raleway'
                        >
                            ADD +
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}
