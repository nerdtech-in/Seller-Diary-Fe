import React from 'react'
import { Image } from '../Assets/Image'
import { useNavigate } from 'react-router-dom'

export default function PaymentCard({
    item
}) {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0)
    return (
        <div
            className='w-full mt-2 py-2 px-2 rounded-md font-Title'
        >
            <div
                className='flex w-full justify-between items-center'>
                <div
                    className='w-[50px] h-[50px] bg-[#e1dbdbc6] flex rounded-md justify-center items-center'>
                    <img
                        src={Image.order}
                        onClick={() => {
                            navigate('/orderinfo', {
                                state: item
                            })
                        }}
                        className='h-[22px] w-[22px] object-contain' />
                </div>

                <div
                    onClick={() => {
                        navigate('/orderinfo', {
                            state: item
                        })
                    }}
                    className=' flex items-start flex-col justify-evenly w-[80%] '>
                    <p
                        className="text-font-color text-base tracking-widest font-Title text-black bg-page-bg py-[1px] md:p-10 rounded"
                    >
                        In Progress
                    </p>
                    <p
                        className="text-font-color text-[10px] tracking-widest font-Raleway text-icon bg-page-bg py-[1px] md:p-10 rounded"
                    >
                        2 x Ramen | 3 x Tempura
                    </p>
                    <p
                        className="text-font-color text-[10px] tracking-widest font-Raleway text-icon bg-page-bg py-[1px] md:p-10 rounded"
                    >
                        Order #123 . Table 4 . <span className=' text-primary font-bold font-Title'>20 Min</span> 
                    </p>
                </div>
            </div>
        </div>
    )
}
