import React from "react";
import "./LastChangeDate.scss";

interface LastChangeDateProps {
    date: Date;
}

const MonthNames = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

export const LastChangeDate: React.FC<LastChangeDateProps> = ({ date }) => (
    <div className="change-date">
        <span className="change-date__text"> последние изменения {date.getDate()} {MonthNames[date.getMonth()]} {date.getFullYear()} в {date.toLocaleTimeString()}</span>
    </div>
);

