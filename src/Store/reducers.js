import { toast } from 'react-toastify';

const initialState = {
    userInfo: null,
    access: null,
    cart: [],
    visitorId: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload,
            };
        case "ID":
            return {
                ...state,
                visitorId: action.payload,
            };
        case "USER":
            return {
                ...state,
                userInfo: action.payload,
            };
        case "ADD_TO_CART":
            const existingProduct = state.cart.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                var d = state.cart.map((item) =>
                    item.id === existingProduct.id ? { ...item, quantity: item.quantity + 1 } : item
                );
                localStorage.setItem("cart", JSON.stringify(d));
                toast.success('Added to Cart', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return {
                    ...state,
                    cart: d

                };
            } else {
                var d = [...state.cart, { ...action.payload, quantity: 1 }]
                localStorage.setItem("cart", JSON.stringify(d));
                toast.success('Added to Cart', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return {
                    ...state,
                    cart: d,
                };
            }
        default:
            return state;
    }
}