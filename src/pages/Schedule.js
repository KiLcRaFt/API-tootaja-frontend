import React, { useState } from "react";
import { updateSchedule } from "../services/api";

function Schedule() {
    const [schedule, setSchedule] = useState({ date: "", start: "", end: "" });

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateSchedule(1, schedule); // Замените "1" на ID сотрудника
            alert("Расписание обновлено!");
        } catch (error) {
            alert("Ошибка обновления!");
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <input
                type="date"
                value={schedule.date}
                onChange={(e) => setSchedule({ ...schedule, date: e.target.value })}
            />
            <input
                type="time"
                value={schedule.start}
                onChange={(e) => setSchedule({ ...schedule, start: e.target.value })}
            />
            <input
                type="time"
                value={schedule.end}
                onChange={(e) => setSchedule({ ...schedule, end: e.target.value })}
            />
            <button type="submit">Обновить</button>
        </form>
    );
}

export default Schedule;
