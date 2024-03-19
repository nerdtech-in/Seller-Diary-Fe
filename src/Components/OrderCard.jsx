import React from 'react'
import { Image } from '../Assets/Image'
import { useNavigate } from 'react-router-dom'

export default function OrderCard({
    item
}) {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0)
    function getTime() {
        var time = 0
        item?.order?.map((item, index) => {
            time+= item?.item?.expected_delivery
        })
        return time;
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
                        className="text-font-color text-base tracking-widest font-Raleway text-black bg-page-bg py-[1px] md:p-10 rounded"
                    >
                        
                        {
                            item?.is_served?
                            "Delivered"
                            :
                            "In Progress"
                        }
                    </p>
                    <p
                        className="text-font-color flex text-[10px] space-x-1 tracking-widest font-Raleway text-icon bg-page-bg py-[1px] md:p-10 rounded"
                    >
                        {
                            item?.order?.map((item, index) => (
                                <p className=' overflow-hidden'>{item?.quantity} X {item?.item?.name} | </p>
                            ))
                        }
                    </p>
                    <p
                        className="text-font-color text-[10px] tracking-widest font-Raleway text-icon bg-page-bg py-[1px] md:p-10 rounded"
                    >
                        Order #{item?.id} . Table 4 . <span className=' text-primary font-bold font-Title'>{getTime()} Min</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
