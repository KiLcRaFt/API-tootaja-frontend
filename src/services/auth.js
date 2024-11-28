import API from "./api";
import jwt_decode from "jwt-decode";

export const login = async (credentials) => {
    // Используем параметры из объекта credentials для формирования query string
    const { Email, Password } = credentials;

    const response = await API.post(`/auth/login?Email=${encodeURIComponent(Email)}&Password=${encodeURIComponent(Password)}`);

    const { token } = response.data; // Предполагаем, что сервер возвращает токен
    localStorage.setItem("token", token); // Сохраняем токен в localStorage
    const user = jwt_decode(token); // Декодируем токен для получения данных пользователя
    return user; // Возвращаем информацию о пользователе
};



export const validateToken = async () => {
    const token = localStorage.getItem("token"); // Извлекаем токен из localStorage
    if (!token) throw new Error("No token found");

    try {
        // Передаем токен в тело запроса
        const response = await API.post("/auth/validate-token2", { token });
        return response.data; // Возвращаем результат валидации
    } catch (error) {
        localStorage.removeItem("token"); // Удаляем токен, если сервер возвращает ошибку
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem("token"); // Удаляем токен из localStorage
};
