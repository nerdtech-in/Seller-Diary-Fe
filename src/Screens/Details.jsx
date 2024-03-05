import React from 'react'
import FingerprintJS from '@fingerprintjs/fingerprintjs';
export default function Details() {
    const [fpHash, setFpHash] = React.useState('');
    React.useEffect(() => {
        const setFp = async () => {
            const fp = await FingerprintJS.load();
            const { visitorId } = await fp.get();
            setFpHash(visitorId);
        };
        setFp();
    }, []);
    console.log(fpHash)
    const [data, setData] = React.useState({
        name: '',
        phone: ''
    })
    const [check, setCheck] = React.useState(false)

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
                    onClick={(e) => {
                        setData({ ...data, name: e.target.value })
                    }}
                    className='border-2 w-[88%] pl-3 py-3  font-Raleway rounded-lg'
                />
                <input
                    placeholder='Your Mobile Number'
                    type='number'
                    onClick={(e) => {
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
                    disabled={check}
                    className={`${check ? `bg-primary` : `bg-primary2`} w-[88%] text-white font-Raleway text-lg font-medium tracking-wider py-3 rounded-lg`}>
                    Confirm
                </button>
            </div>
        </div>
    )
}
