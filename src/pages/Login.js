import React, { useState } from "react";
import { login } from "../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            alert("Успешная авторизация!");
            console.log(data);
        } catch (error) {
            alert("Ошибка авторизации!");
        }
    };

    return (
        <div>
            <h1>Вход</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}

export default Login;
