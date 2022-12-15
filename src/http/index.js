import axios from 'axios'
import BASE_URL from "@/http/urls";


const http = axios.create({
    baseURL: BASE_URL
})

http.interceptors.request.use((config) => {
    if(localStorage.getItem('access_token')){
        config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    }
    return config
})

http.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            await axios.post('http://127.0.0.1:8000/auth/jwt/jwt/refresh/',
                { refresh: localStorage.getItem('refresh_token') }, { withCredentials: true })
                .then(response => localStorage.setItem('access_token', response.data.access))
            return http.request(originalRequest)
        } catch (e) {
            console.log(e)
            localStorage.removeItem('refresh_token')
            localStorage.removeItem('access_token')
        }
    }
    throw error;
})

export default http