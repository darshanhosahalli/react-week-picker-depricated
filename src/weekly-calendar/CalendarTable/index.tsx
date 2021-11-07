import React from 'react';
import moment from 'moment';
import './CalendarTable.css';
import '../calendar.css';

interface AppProps {
    daysInMonth: number,
    days: string[],
    theme?: string,
    currentDate: string,
    onWeekClick: (startDate: string, endDate: string) => void,
}


export const CalendarTable = (appProps: AppProps) => {

    const weekDays: string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    const renderWeekDays = (): JSX.Element[] => {
        return weekDays.map((item, index) => {
            return <td key={index} className="font">{item}</td>
        });
    }

    const splitDaysToWeeks = (): string[][] => {
        let results: string[][] = [];
        while(appProps.days.length) {
            results.push(appProps.days.splice(0, 7))
        }
        return results;
    }

    const renderDays = (days: string[]): JSX.Element[] => {
        return days.map((item, index) => {
            return <td key={index} className="font">{moment(item).format('D')}</td>
        })
    }

    const renderWeeks = (): JSX.Element[] => {
        let results: string[][] = splitDaysToWeeks();
        return results.map((item, index) => {
            const currentWeek = item.includes(appProps.currentDate)
            return <tr key={index} onClick={() => {appProps.onWeekClick(item[0],item[6])}} className={`row ${currentWeek? 'highlighted' : ''}`}>
                        {renderDays(item)}
                    </tr>
        });
    }

    return <table>
        <thead>
            <tr className="row">
                {renderWeekDays()}
            </tr>
        </thead>
        <tbody>
            {renderWeeks()}
        </tbody>
    </table>
}