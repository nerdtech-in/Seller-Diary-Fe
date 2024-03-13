import FingerprintJS from '@fingerprintjs/fingerprintjs';
import axios from 'axios';
import axiosIns, { baseURL } from '../Helper/Helper';


export const getAccess = (setLoading) => {
    return async dispatch => {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        await axios.post(baseURL + '/print-login/', {
            'finger_print': visitorId
        }).then((res) => {
            dispatch({
                type: 'LOGIN',
                payload: res?.data?.access_token,
            })
            setLoading(false);
        }).catch((err) => {
            console.log(err)
            setLoading(false);
        })
    }
}

export const RegisterAccess = (data, setLoading) => {
    setLoading(true);

    return async dispatch => {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        await axios.post(baseURL + '/login/', {
            'name': data?.name,
            'mobile_number': data?.phone,
            'finger_print': visitorId
        }).then((res) => {
            dispatch({
                type: 'LOGIN',
                payload: res?.data?.access_token,
            })
            setLoading(false);
        }).catch((err) => {
            console.log(err)
            setLoading(false);
        })
    }
}

export const getMenu = (path, setData, setLoading,token,setActiveTab) => {
    return async dispatch => {
        await axios.get(baseURL + path, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setData(res.data)
            setActiveTab(res.data?.categories[0]?.name)
            dispatch({
                type: 'OUTLET',
                payload: res?.data,
            })
            setLoading(false);
        }).catch((err) => {
            console.log(err)
            setLoading(false);
        })
    }
}

export const updateCartAction = (data) => {
    return async dispatch => {
      dispatch({
        type: 'CHANGE_QUANTITY',
        payload: data,
      })
    }
  }

export const getOrders = () => {
    return async dispatch => {

    }
}

export const sendOrder = (outlet,cart,setLoading,token,navigate) => {
    var product = []
    cart.map((item)=>{
        product.push({
            "item":item?.id,
            "quantity":item?.quantity,
        })
    })
    var data = {}
    data['table_id'] = outlet?.table_id
    data['products'] = product
    return async dispatch => {
        console.log(data)
        await axios.post(baseURL + '/order/',data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data)
            dispatch({
                type: 'EMPTY_CART',
                payload: [],
              })
            navigate(-1)
            setLoading(false);
        }).catch((err) => {
            console.log(err)
            setLoading(false);
        })
    }
}
