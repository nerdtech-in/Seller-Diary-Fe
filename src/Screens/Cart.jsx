import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import FoodCard from '../Components/FoodCard';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../Components/CartCard';
import { sendOrder } from '../Store/actions';
export default function Cart() {
    const navigate = useNavigate()
    const cart = useSelector(state => state.Reducers.cart)
    const access = useSelector(state => state.Reducers.access)

    const outlet = useSelector(state => state.Reducers.outlet)
    const [loaidng,setLoading] = React.useState(false)
    const dispatch = useDispatch()
    console.log(cart);
    function getTotal(cart){
        let sum=0;
        cart.map((item,index)=>{
            sum+= item.price * item.quantity
        })
        return sum
    }
    return (
        <section class=" bg-white">
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center px-3 justify-between py-3">
                    <IoMdArrowBack
                        onClick={() => {
                            navigate(-1)
                        }}
                        className=' text-primary'
                        size={25}
                    />
                    <h1 class="text-2xl font-semibold font-Title text-black"> your Cart</h1>
                    <div
                        className='h-[30px] w-[30px]'
                    />
                </div>
                <div className='mt-2'>
                    {
                        cart?.map((item, index) => (
                            <CartCard key={index} item={item} />
                        ))
                    }

                </div>
            </div>
            <div
                className={`fixed transition-all lg:hidden font-Title bg-white bottom-0 w-full h-[11.5%] border-t-[1px] flex justify-between px-8 z-50 items-center`}
            >
                <div className='flex space-x-4 justify-center items-center'>
                    <h1 class="text-2xl font-semibold font-Title text-black tracking-wider">₹ {getTotal(cart)}</h1>
                </div>
                <button
                    onClick={()=>{
                        dispatch(sendOrder(outlet,cart,setLoading,access,navigate))
                    }}
                    className=' bg-primary px-8 rounded-md py-2 text-white font-black tracking-widest'>
                    Order Now
                </button>
            </div>
        </section>
    )
}
