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
        try {
            const user = await login(credentials); // Передаем объект с Email и Password
            onLogin(user); // Вызываем функцию onLogin с данными пользователя
        } catch (err) {
            setError("Invalid username or password");
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
