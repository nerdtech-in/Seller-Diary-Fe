import React from 'react'
import BottomTab from '../Components/BottomTab';

import Header from '../Components/Header'
import OrderCard from '../Components/OrderCard';
export default function Orders() {
  return (
    <div>
      <Header title={"Orders"} />
      <p
        className="text-font-color text-xl font-Title tracking-wider font-bold text-black bg-page-bg px-5 mt-2 md:p-10 rounded"
      >
        Current Orders
      </p>
      <div className='p-4'
      >
        <OrderCard />
      </div>
      <p
        className="text-font-color text-xl font-Title tracking-wider font-bold text-black bg-page-bg px-5 mt-2 md:p-10 rounded"
      >
        Delivered Orders
      </p>
      <div className='p-4'
      >
        <OrderCard />
      </div>
      <BottomTab />
    </div>
  )
}
