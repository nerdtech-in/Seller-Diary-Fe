import React from 'react'
import BottomTab from '../Components/BottomTab';

import Header from '../Components/Header'
export default function Orders() {
  return (
    <div>
      <Header title={"Orders"} />
      <p
        className="text-font-color text-xl font-Title tracking-wider font-bold text-black bg-page-bg px-5 mt-2 md:p-10 rounded"
      >
        Current Orders
      </p>
      <BottomTab />
    </div>
  )
}
