import React from 'react'
import { Image } from '../Assets/Image'
import { useNavigate } from 'react-router-dom'

export default function PaymentCard({
    item,
}) {
    const navigate = useNavigate();
    function getTotal(){
        var total = 0
        item?.order?.map((item, index) => {
            total+= item?.item?.price * item?.quantity

        })
        return total;
    }
    return (
        <div
            className='w-full mt-2 py-2 px-2 rounded-md font-Raleway'
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
                        className="text-font-color text-sm tracking-widest font-Raleway text-black bg-page-bg py-[1px] md:p-10 rounded"
                    >
                       Order ID #{item?.id}
                    </p>
                    <p
                        className="text-font-color text-sm tracking-widest font-Raleway text-black bg-page-bg py-[1px] md:p-10 rounded"
                    >
                       ₹ {getTotal()}
                    </p>
                </div>
            </div>
        </div>
    )
}
