import React from 'react';
import moment, { Moment, weekdays } from 'moment';
import { Button } from './Button';
import './calendar.css';
import { CalendarIcon } from './icons';
import Calendar from '../weekly-calendar/calendar';

interface AppState {
    momentContext: Moment;
}

interface AppProps {
}

class WeeklyCalendar extends React.Component<AppProps,AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            momentContext: moment(),
        };
    }

    getWeekStartDate = (): string => {
        return this.state.momentContext.startOf('week').format('DD MMM YYYY');
    }

    getWeekEndDate = (): string => {
        return this.state.momentContext.endOf('week').format('DD MMM YYYY');
    }

    getMonth = (format: string): string => {
        format = format === ''? 'MMM' : format;
        return this.state.momentContext.format(format);
    }

    getYear = (format: string): string => {
        format = format === ''? 'YYYY' : format;
        return this.state.momentContext.format(format);
    }

    getDaysBefore = (): string[] => {
        const startDay = this.state.momentContext.day();
        let daysBefore: string[] = [];
        if(startDay !== 0) {
            for(let i=(startDay-2); i>0; i--) {
                const lastDayOfPreviousMonth = moment('01 oct 2021').subtract(1, 'months').endOf('month');
                const previousDay = lastDayOfPreviousMonth.subtract(i, 'days');
                daysBefore.push(previousDay.format('DD'));
            }
            const lastDayOfPreviousMonth = moment('01 oct 2021').subtract(1, 'months').endOf('month');
            daysBefore.push(lastDayOfPreviousMonth.format('DD'));
        }
        return daysBefore;
    }

    getDaysAfter = (): string[] => {
        const endDay = moment('30 nov 2021').day();
        let daysAfter: string[] = []
        if(endDay !== 7) {
            for(let i=0; i<(6 - endDay); i++) {
                daysAfter.push(`${i+1}`);
            }
        }
        return daysAfter
    }

    getDaysInMonth = ():number => {
        return this.state.momentContext.daysInMonth();
    }

    render() {
      return <div>
                <Button>
                    <CalendarIcon/> {this.getWeekStartDate()} - {this.getWeekEndDate()}
                </Button>
                <Calendar 
                    month={this.getMonth('')} 
                    year={this.getYear('')}
                    daysInMonth={this.getDaysInMonth()}
                    daysBefore={this.getDaysBefore()}
                    daysAfter={this.getDaysAfter()}
                />
            </div>
    }
}

export default WeeklyCalendar;