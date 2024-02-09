import React from "react"
import { AiOutlineOrderedList, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
export default function Tab() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div
            className={`fixed transition-all lg:hidden ease-linear bg-white bottom-0 w-full h-[11.5%] border-t-2 flex justify-evenly items-center`}
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
                    className={`${location?.pathname === '/' ? `text-black font-medium` : `text-icon`} text-sm text-opacity-80 font-Raleway`}>
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
                    className={`${location?.pathname === '/menu' ? `text-black font-medium` : `text-icon`} text-sm text-opacity-80 font-Raleway`}>
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
                    className={`${location?.pathname === '/orders' ? `text-black font-medium` : `text-icon`} text-sm text-opacity-80 font-Raleway`}>
                    Orders
                </p>
            </button>
            <button
                onClick={() => {
                    navigate('/profile')
                }}
                className={`flex flex-col justify-center items-center`}
            >
                <AiOutlineUser
                    size={30}
                    className={location?.pathname === '/profile' ? `text-primary` : `text-icon`}
                />
                <p
                    className={`${location?.pathname === '/profile' ? `text-black font-medium` : `text-icon`} text-sm text-opacity-80 font-Raleway`}>
                    Profile
                </p>
            </button>
        </div>
    )
}
