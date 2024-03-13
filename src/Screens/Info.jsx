import React from 'react'
import Header from '../Components/Header'
import { useLocation } from 'react-router-dom'
import { baseURL } from '../Helper/Helper';

export default function Info() {
    const { state } = useLocation();
    const [count, setCount] = React.useState(1)
    return (
        <div className='flex flex-col justify-center '>
            <Header title={state?.name} />
            <img
                src={baseURL + state?.images[0]?.image}
                alt='image'
                className='w-full h-[200px] ' />
            <p className='px-4 font-Raleway text-base py-2 text-justify'>
                {`${state?.description}`}
            </p>
            <hr className='w-[95%] self-center' />
            <p className='px-4 font-Raleway text-black text-base py-2 text-justify'>
                Expected Delivery Time : <span
                    className='text-primary font-semibold font-Title tracking-widest'
                >{state?.expected_delivery} Min</span>
            </p>
            <div
                className={`fixed transition-all lg:hidden font-Title bg-white bottom-0 w-full h-[11.5%] border-t-[1px] flex justify-between px-8 z-50 items-center`}
            >
                <div className='flex space-x-4 justify-center items-center'>
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
                        className='text-black font-bold text-xl self-center font-Title'
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
                <p
                    className='text-primary self-center text-sm font-Raleway'
                >
                    ₹ {count * state?.price}
                </p>
                <button
                    className=' bg-primary px-8 rounded-md py-2 text-white font-black tracking-widest'>
                    {`Add to cart  `}
                </button>
            </div>
        </div>
    )
}
