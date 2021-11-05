import React from 'react';
import './CalendarTable.css';
import '../calendar.css';

export const CalendarTable = () => {

    const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    const renderDays = () => {
        return weekDays.map(item => {
            return <tr className="item font">{item}</tr>
        });
    }

    return <table className="table">
        <thead className="row">
            {renderDays()}
        </thead>
        <tbody></tbody>
    </table>
}