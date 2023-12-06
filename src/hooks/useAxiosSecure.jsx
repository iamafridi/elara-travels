import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    // Request Interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('Request Stopped By Interceptor', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    // Interceptor 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, (error) => {
        const status = error.response.status;
        console.log('Status error in the interceptor', status);
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;