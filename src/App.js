import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={user ? <Navigate to="/dashboard" /> : <LoginForm onLogin={setUser} />}
                />
                <Route
                    path="/dashboard"
                    element={user ? <Dashboard /> : <Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
}

export default App;
