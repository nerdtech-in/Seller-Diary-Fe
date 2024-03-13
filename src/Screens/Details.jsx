import React from 'react'
import { useDispatch } from 'react-redux'
import { RegisterAccess } from '../Store/actions';
export default function Details() {
    const [data, setData] = React.useState({
        name: '',
        phone: ''
    })
    const [check, setCheck] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const dispatch = useDispatch();
    return (
        <div
            className='flex flex-col  justify-center items-center'
        >
            <h1
                className=' font-Raleway mt-10 w-[88%] text-text text-center text-2xl  tracking-wider'>
                Enter Your Details
            </h1>
            <p
                className=' font-Raleway m-0 p-0 w-[88%] text-text  text-center text-sm  tracking-wider'>
                To start ordering
            </p>
            <div
                className='space-y-8 mt-10 flex flex-col w-full justify-center items-center'>
                <input
                    placeholder='Your Name'
                    type='text'
                    value={data?.name}
                    onChange={(e) => {
                        setData({ ...data, name: e.target.value })
                    }}
                    className='border-2 w-[88%] pl-3 py-3  font-Raleway rounded-lg'
                />
                <input
                    placeholder='Your Mobile Number'
                    type='number'
                    value={data.phone}
                    onChange={(e) => {
                        setData({ ...data, phone: e.target.value })
                    }}
                    className='border-2 w-[88%] pl-3 py-3 font-Raleway rounded-lg'
                />
                <div
                    className='flex w-[88%] space-x-2'>
                    <input type='checkbox'
                        className='bg-primary'
                        onClick={() => { setCheck(!check) }}
                    />
                    <p
                        className=' font-Raleway text-left text-xs text-text  tracking-wider'>
                        I have read and agree to the <span
                            className='text-primary'>
                            terms of services
                        </span>
                    </p>
                </div>
                <button
                    disabled={!check}
                    onClick={()=>{
                        dispatch(RegisterAccess(data,setLoading))
                    }}
                    className={`${check ? `bg-primary` : `bg-primary2`} w-[88%] text-white font-Raleway text-lg font-medium tracking-wider py-3 rounded-lg`}>
                    {
                        loading?
                        'Loading'
                        :
                        'Confirm'
                    }
                </button>
            </div>
        </div>
    )
}
