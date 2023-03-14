import axios from 'axios';
import { logout } from './services/auth-service';

const accessToken = localStorage.getItem("accessToken");
const axiosIntance = axios.create({
    // baseURL: 'https://lionfish-app-3tb5j.ondigitalocean.app',
    baseURL: 'http://138.68.87.111:5000',
    headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + accessToken
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
    transformResponse: [
        (data) => {
            return JSON.parse(data);
        },
    ],
});
axiosIntance.interceptors.response.use(
    res => res,
    function (error) {
        if (error.response.status === 401) {
            logout();
            console.log(window.location.href);
            //window.location.href = "/";
        }
    return Promise.reject(error)
    }
);
export default axiosIntance;