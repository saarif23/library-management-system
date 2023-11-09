import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const instance = axios.create({
    baseURL: 'https://library-management-system-server-ivory.vercel.app',
    withCredentials: true
});

const useAxios = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        instance.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('axiossecure error', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                logout()
                    .then(() => {
                        navigate("/login")

                    })
                    .catch(error => console.log(error))
            }
        })
    }, [])

    return instance;
}
export default useAxios;


