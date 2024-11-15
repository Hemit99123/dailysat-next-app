import axios from 'axios';

// Create an Axios instance
const httpService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL as string, // Backend URL
    withCredentials: true, // Enable sending cookies for cross-origin requests
});

export default httpService;
