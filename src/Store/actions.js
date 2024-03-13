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

export const sendOrder = () => {
    return async dispatch => {

    }
}
