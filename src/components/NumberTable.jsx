import React, { useState } from 'react';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import HeaderMonth from './HeaderMonth';

export default function NumberTable() {
    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const currentDate = new Date();

    const [startDate, setStartDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1));
    const [selectedDate, setSelectedDate] = useState(null);

    function getDayOfWeek(date) {
        if (!(date instanceof Date)) {
            throw new Error("O argumento deve ser um objeto Date.");
        }
        const day = date.getDay();
        return daysOfWeek[day];
    }

    // Gera todos os dias do mês atual
    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days = Array.from({ length: totalDays }, (_, i) => {
        const nextDate = new Date(year, month, i + 1);
        return {
            date: nextDate,
            dayOfWeek: getDayOfWeek(nextDate),
            dayOfMonth: nextDate.getDate(),
            isPast: nextDate < new Date(currentDate.setHours(0, 0, 0, 0)),
            isMonday: nextDate.getDay() === 1
        };
    });

    // Preenche a primeira semana com espaços vazios se o mês não começar em domingo
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const paddedDays = [...Array(firstDayOfMonth).fill(null), ...days];

    // Divide os dias em semanas (linhas da tabela)
    const weeks = [];
    for (let i = 0; i < paddedDays.length; i += 7) {
        weeks.push(paddedDays.slice(i, i + 7));
    }

    const handleDayClick = (dayObj) => {
        if (!dayObj || dayObj.isPast || dayObj.isMonday) return;
        setSelectedDate(dayObj.date);
    };

    const handleNextClick = () => {
        const newStartDate = new Date(startDate);
        newStartDate.setMonth(startDate.getMonth() + 1);
        setStartDate(newStartDate);
    };

    const handlePrevClick = () => {
        const newStartDate = new Date(startDate);
        newStartDate.setMonth(startDate.getMonth() - 1);
        setStartDate(newStartDate);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '750px', margin: '0 auto' }}>
                <PrevButton onClick={handlePrevClick} />
                <HeaderMonth date={startDate} />
                <NextButton onClick={handleNextClick} />
            </div>
            <table style={{ margin: '30px auto' }}>
                <thead>
                    <tr>
                        {daysOfWeek.map((day, index) => (
                            <th key={index}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, i) => (
                        <tr key={i}>
                            {week.map((dayObj, index) => (
                                <td
                                    key={index}
                                    id='td'
                                    className={`${dayObj?.isPast || dayObj?.isMonday ? "disabled_day" : ""} ${selectedDate && dayObj && selectedDate.getTime() === dayObj.date.getTime() ? "selected_day" : ""}`}
                                    onClick={() => handleDayClick(dayObj)}
                                    style={{ cursor: dayObj?.isPast || dayObj?.isMonday ? 'not-allowed' : 'pointer' }}
                                >
                                    {dayObj ? dayObj.dayOfMonth : ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
