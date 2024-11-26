import React, { useEffect, useState } from "react";
import { getEmployees } from "../services/api";

function AdminPanel() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                alert("Ошибка загрузки сотрудников!");
            }
        };
        fetchEmployees();
    }, []);

    return (
        <div>
            <h1>Администраторская панель</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>{employee.name} ({employee.email})</li>
                ))}
            </ul>
        </div>
    );
}

export default AdminPanel;
