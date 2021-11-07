import React from 'react';
import { NavBar } from '../NavBar';
import { CalendarTable } from '../CalendarTable';
import '../calendar.css';
import './calendar.css';
import { Button } from '../Button';


interface AppProps {
    theme?: string,
    month: string,
    year: string,
    daysInMonth: number,
    days: string[],
    onPreviousClick: () => void,
    onNextClick: () => void,
    onJumpToCurrentWeek: () => void,
    onWeekClick: (startDate: string, endDate: string) => void,
    currentDate: string,
    display: boolean
}

interface AppState {

}

class Calendar extends React.Component<AppProps, AppState> {

    render() {
        return <div className={`box ${this.props.theme? this.props.theme : 'primary-box'} ${!this.props.display? 'display' : ''}`}>
            <div className="nav-bar">
                <NavBar
                    month={this.props.month} 
                    year={this.props.year}
                    onPreviousClick={this.props.onPreviousClick}
                    onNextClick={this.props.onNextClick}
                />
            </div>
            <div className="">
                <CalendarTable 
                    daysInMonth={this.props.daysInMonth}
                    days={this.props.days}
                    currentDate={this.props.currentDate}
                    onWeekClick={this.props.onWeekClick}
                />
            </div>
            <div className="week-button">
                <Button onClick={this.props.onJumpToCurrentWeek}>Jump To Current Week</Button>
            </div>
        </div>
    }

}

export default Calendar;