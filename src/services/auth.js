import API from "./api";
export const login = async (credentials) => {
    const { Email, Password } = credentials;

    // Отправляем запрос на вход
    const response = await API.post(`/auth/login`, { Email, Password });

    // Получаем ответ с информацией о пользователе
    const user = response.data; // Сервер возвращает информацию о пользователе
    localStorage.setItem("user", JSON.stringify(user)); // Сохраняем пользователя в localStorage

    return user; // Возвращаем данные пользователя
};

export const validateSession = async () => {
    try {
        // Отправляем запрос на проверку сессии
        const response = await API.get("/auth/validate-session");

        // Если сессия действительна, возвращаем данные пользователя
        return response.data;
    } catch (error) {
        // Если сессия недействительна, удаляем данные из localStorage
        localStorage.removeItem("user");
        throw error;
    }
};

export const logout = async () => {
    await API.post("/auth/logout"); // Вызываем серверный метод для выхода
    localStorage.removeItem("user"); // Удаляем данные пользователя из localStorage
};
