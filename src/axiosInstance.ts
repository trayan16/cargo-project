import axios from 'axios';

const axiosIntance = axios.create({
    // baseURL: 'https://lionfish-app-3tb5j.ondigitalocean.app',
    baseURL: 'http://138.68.87.111:5000',
    headers: {
        'Content-Type': 'application/json',
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

export default axiosIntance;