import FingerprintJS from '@fingerprintjs/fingerprintjs';


export const getFingerPrint = () => {
    return async dispatch => {
        const fp = await FingerprintJS.load();
        const { visitorId } = await fp.get();
        dispatch({
            type: 'ID',
            payload: visitorId,
        })
    }
}

export const getMenu = () => {
    return async dispatch => {
        
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
