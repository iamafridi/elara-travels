import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://elara-travels-server.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    // Request Interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('Request Stopped By Interceptor', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    // Interceptor 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },async (error) => {
        const status = error.response.status;
        // console.log('Status error in the interceptor', status);
        // For Bad Request 401 and 403 and moving user to the login Page
        if(status === 401 || status===403){
           await logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;