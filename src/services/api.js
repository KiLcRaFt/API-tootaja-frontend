import axios from "axios";

const API_URL = "http://localhost:7215/api"; // Замените на ваш URL

// Авторизация
export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data)); // Сохраняем токен
    }
    return response.data;
};

// Получение данных о сотрудниках (для администратора)
export const getEmployees = async () => {
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    const response = await axios.get(`${API_URL}/employees`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// Редактирование расписания сотрудника
export const updateSchedule = async (employeeId, schedule) => {
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    const response = await axios.put(`${API_URL}/schedule/${employeeId}`, schedule, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
