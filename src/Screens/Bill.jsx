import React from 'react'
import Header from '../Components/Header'
import BottomTab from '../Components/BottomTab';
import PaymentCard from '../Components/PaymentCard';


export default function Bill() {
    return (
        <div>
            <Header title={"Payments"} />
            <div className='p-4'
            >
                <PaymentCard />
            </div>
            <BottomTab />
        </div>
    )
}
