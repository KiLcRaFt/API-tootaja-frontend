import React, { useState } from "react";
import { login } from "../services/auth";

const LoginForm = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ Email: "", Password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Отправляем данные для входа:", { Email: credentials.Email, Password: credentials.Password });

        try {
            const user = await login({ Email: e.Email, Password: e.Password }); // Передача данных
            console.log("Ответ сервера:", user); // Проверка данных пользователя
            alert("Успешная авторизация!");
        } catch (error) {
            console.error("Ошибка авторизации:", error.response?.data || error.message); // Покажите ошибку
            alert("Ошибка авторизации: такого пользователя нет!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
                type="text"
                name="Email" // Имя поля соответствует ключу Email
                placeholder="Email"
                value={credentials.Email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="Password" // Имя поля соответствует ключу Password
                placeholder="Password"
                value={credentials.Password}
                onChange={handleChange}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
