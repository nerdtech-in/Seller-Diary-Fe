import React from 'react'
import BottomTab from '../Components/BottomTab';

import Header from '../Components/Header'
import OrderCard from '../Components/OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders } from '../Store/actions';
export default function Orders() {
  const order = useSelector(state => state.Reducers.orderHistory)
  const token = useSelector(state => state.Reducers.access)
  const [loading, setLoading] = React.useState(false)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getMyOrders(token, setLoading))
  }, [])
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
        {
          order?.map((item, index) => {
            if (item?.is_served) {
            }
            else {
              return <OrderCard key={index} item={item} />
            }
          })
        }
      </div>
      <p
        className="text-font-color text-xl font-Title tracking-wider font-bold text-black bg-page-bg px-5 mt-2 md:p-10 rounded"
      >
        Delivered Orders
      </p>
      <div className='p-4'
      >
        {
          order?.map((item, index) => {
            if (item?.is_served) {
              return <OrderCard key={index} item={item} />
            }
          })
        }
      </div>
      <BottomTab />
    </div>
  )
}
