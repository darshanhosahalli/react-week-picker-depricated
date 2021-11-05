import React from 'react';
import moment from 'moment';
import { NavBar } from '../NavBar';
import { CalendarTable } from '../CalendarTable';
import '../calendar.css';

interface AppProps {
    month: string,
    year: string,
    daysInMonth: number,
    daysBefore: string[],
    daysAfter: string[]
}

interface AppState {

}

class Calendar extends React.Component<AppProps, AppState> {
    
    constructor(props: AppProps) {
        super(props)
    }

    render() {
        return <div className="box primary-box">
            <div className="nav-bar">
                <NavBar month={this.props.month} year={this.props.year}/>
            </div>
            <div className="calendar">
                <CalendarTable/>
            </div>
            <div className="week button">
                weeek button
            </div>
        </div>
    }

}

export default Calendar;