import React from "react"
import { AiOutlineOrderedList, AiOutlineHome } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { CiReceipt } from "react-icons/ci";
export default function BottomTab() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div
            className={`fixed transition-all lg:hidden font-Title bg-white bottom-0 w-full h-[11.5%] border-t-[1px] flex justify-evenly z-50 items-center`}
        >
            <button
                onClick={() => {
                    navigate('/')
                }}
                className={`flex flex-col justify-center items-center`}
            >
                <AiOutlineHome
                    size={30}
                    className={location?.pathname === '/' ? `text-primary` : `text-icon`}
                />
                <p
                    className={`${location?.pathname === '/' ? `text-primary font-semibold` : `text-icon`} text-sm text-opacity-80 font-Title`}>
                    Home
                </p>
            </button>
            <button
                onClick={() => {
                    navigate('/menu')
                }}
                className={`flex flex-col justify-center items-center`}
            >
                <MdOutlineRestaurantMenu
                    size={30}
                    className={location?.pathname === '/menu' ? `text-primary` : `text-icon`}
                />
                <p
                    className={`${location?.pathname === '/menu' ? `text-primary font-semibold` : `text-icon`} text-sm text-opacity-80 font-Title`}>
                    Menu
                </p>
            </button>
            <button
                onClick={() => {
                    navigate('/orders')
                }}
                className={`flex flex-col justify-center items-center`}
            >
                <AiOutlineOrderedList
                    size={30}
                    className={location?.pathname === '/orders' ? `text-primary` : `text-icon`}
                />
                <p
                    className={`${location?.pathname === '/orders' ? `text-primary font-semibold` : `text-icon`} text-sm text-opacity-80 font-Title`}>
                    Orders
                </p>
            </button>
            <button
                onClick={() => {
                    navigate('/bill')
                }}
                className={`flex flex-col justify-center items-center`}
            >
                <CiReceipt
                    size={30}
                    className={location?.pathname === '/bill' ? `text-primary` : `text-icon`}
                />
                <p
                    className={`${location?.pathname === '/bill' ? `text-primary font-semibold` : `text-icon`} text-sm text-opacity-80 font-Title`}>
                    Payments
                </p>
            </button>
        </div>
    )
}
