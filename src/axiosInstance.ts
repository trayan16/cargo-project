import axios from 'axios';

const axiosIntance = axios.create({
    baseURL: 'http://work.eba-prvrng5h.us-east-1.elasticbeanstalk.com',
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