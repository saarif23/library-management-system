import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://library-management-system-server-ivory.vercel.app',
    withCredentials: true
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;