import { toast } from 'react-toastify';

const initialState = {
    userInfo: null,
    outlet: {},
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
        case "OUTLET":
            return {
                ...state,
                outlet: action.payload,
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
                    item.id === existingProduct.id ? { ...item } : item
                );
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
                var d = [...state.cart, { ...action.payload }]
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
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        case "EMPTY_CART":
            return {
                ...state,
                cart: action.payload,
            };
        case "CHANGE_QUANTITY":
            return {
                ...state,
                cart: action.payload,
            };
        default:
            return state;
    }
}