import axios from "axios";

const API = axios.create({
    baseURL: "https://localhost:7215/api", // Ваш API URL
});

// Добавление токена в заголовки
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
