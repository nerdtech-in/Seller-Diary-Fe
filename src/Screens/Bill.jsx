import React from 'react'
import Header from '../Components/Header'
import BottomTab from '../Components/BottomTab';
import PaymentCard from '../Components/PaymentCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders } from '../Store/actions';
import { useNavigate } from 'react-router-dom';


export default function Bill() {
    const order = useSelector(state => state.Reducers.orderHistory)
    const token = useSelector(state => state.Reducers.access)
    const [loading, setLoading] = React.useState(false)
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getMyOrders(token, setLoading))
    }, [])
    function getTotalAmount() {
        var total = 0
        order?.map((item, index) => {
            item?.order?.map((order, index) => {
                total += order?.item?.price * order?.quantity

            })
        })
        return total;
    }
    return (
        <div>
            <Header title={"Billing"} />
            <div className='p-4'
            >
                {
                    order?.map((item, index) => {
                        if (item?.is_served) {
                            return <PaymentCard key={index} item={item} />
                        }
                    })
                }
            </div>
            <div
                className={` transition-all lg:hidden font-Title bg-white w-full h-[11.5%] py-2 border-[1px] flex justify-between px-8 z-50 items-center`}
            >
                <div className='flex space-x-4 justify-center items-center'>
                    <h1 class="text-2xl font-semibold font-Title text-black tracking-wider">₹ {getTotalAmount()}</h1>
                </div>
                <button
                    onClick={() => {
                        navigate('/paynow',{
                            state:{
                                amt:getTotalAmount()
                            }
                        })
                        // dispatch(sendOrder(outlet,cart,setLoading,access,navigate))
                    }}
                    className=' bg-primary px-8 rounded-md py-2 text-white font-black tracking-widest'>
                    Pay Now
                </button>
            </div>
            <BottomTab />
        </div>
    )
}
