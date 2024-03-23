import axios from 'axios';
import { useSelector } from 'react-redux';
export const baseURL = 'https://api.techrest.in'
let headers = {};
const axiosIns = axios.create({
    baseURL: 'https://api.techrest.in',
    headers,
});
axiosIns.interceptors.request.use(

    async (config) => {
        const token = useSelector(state=>state.Reducers.access)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error.msg);
    },
);

axiosIns.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
        if (error.response.status === 401) {
            console.log("401");
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    },
);

export default axiosIns;