import React, { useEffect, useState } from "react";
import { validateToken, logout } from "../services/auth";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await validateToken();
                setUser(userData);
            } catch (err) {
                setError("Session expired. Please log in again.");
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        logout();
        window.location.reload();
    };

    if (error) return <p>{error}</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>Role: {user.role}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
