import React from 'react';
import moment from 'moment';
import { Button } from './Button';
import './calendar.css';
import { CalendarIcon } from './icons';
import Calendar from './calendar';
import { RefObject } from 'react';

interface AppState {
    currentDate: string,
    display: boolean,
}

interface AppProps {
    theme?: string;
}

class WeeklyCalendar extends React.Component<AppProps,AppState> {

    theme = 'primary';
    componentRef: RefObject<HTMLDivElement>;

    constructor(props: AppProps) {
        super(props);
        this.state = {
            currentDate: moment().format('DD MMM YYYY'),
            display: false
        };
        this.theme = props.theme || this.theme;
        this.componentRef = React.createRef();
    }

    globalFunction = (event: MouseEvent) => {
        const node: Node = event.target as Node;
        if(!this.componentRef.current?.contains(node)) {
            this.setState({ display: false});
        }
    }

    componentDidMount = () => {
        document.addEventListener('click', this.globalFunction);
    }

    componentWillUnmount = () => {
        document.removeEventListener('click', this.globalFunction);
    }

    getWeekStartDate = (): string => {
        return moment(this.state.currentDate).startOf('week').format('DD MMM YYYY');
    }

    getWeekEndDate = (): string => {
        return moment(this.state.currentDate).endOf('week').format('DD MMM YYYY');
    }

    getMonth = (format: string): string => {
        format = format || 'MMM'
        return moment(this.state.currentDate).format(format);
    }

    getYear = (format: string): string => {
        format = format === ''? 'YYYY' : format;
        return moment(this.state.currentDate).format(format);
    }

    getDaysBefore = (): string[] => {
        const startDay = moment(this.state.currentDate).startOf('month').day();
        let daysBefore: string[] = [];
        if(startDay !== 0) {
            for(let i=(startDay-2); i>=0; i--) {
                const lastDayOfPreviousMonth = moment(this.state.currentDate).subtract(1, 'months').endOf('month');
                const previousDay = lastDayOfPreviousMonth.subtract(i, 'days');
                daysBefore.push(previousDay.format('DD MMM YYYY'));
            }
            const lastDayOfPreviousMonth = moment(this.state.currentDate).subtract(1, 'months').endOf('month');
            daysBefore.push(lastDayOfPreviousMonth.format('DD MMM YYYY'));
        }
        return daysBefore;
    }

    getDaysAfter = (): string[] => {
        const endDayMoment = moment(this.state.currentDate).endOf('month');
        const endDay = endDayMoment.day();
        let daysAfter: string[] = [];
        if(endDay !== 7) {
            for(let i=0; i<(6 - endDay); i++) {
                daysAfter.push(endDayMoment.add(1,'day').format('DD MMM YYYY'));
            }
        }
        return daysAfter;
    }

    getDaysInMonth = (): number => {
        return moment(this.state.currentDate).daysInMonth();
    }

    generateDaysArray = (): string[] => {
        let days: string[] = [];
        days.push(...this.getDaysBefore());
        const monthStart = moment(this.state.currentDate).startOf('month');
        days.push(monthStart.format('DD MMM YYYY'));
        for(let i=2; i <=this.getDaysInMonth(); i++) {
            days.push(monthStart.add(1,'day').format('DD MMM YYYY'));
        }
        days.push(...this.getDaysAfter());
        return days;
    }

    weekPickerOnClick = () => {
        this.setState({ display: !this.state.display })
    }

    jumpToCurrentWeekOnClick = () => {
        this.setState({ currentDate: moment().format('DD MMM YYYY')});
    }

    nextWeekClick = () => {
        let newMoment = moment(this.state.currentDate).add(1, 'week');
        this.setState({ currentDate: newMoment.format('DD MMM YYYY')});
    }

    previousWeekClick = () => {
        let newMoment = moment(this.state.currentDate).subtract(1, 'week');
        this.setState({ currentDate: newMoment.format('DD MMM YYYY')});
    }

    onWeekClick = (startDate: string, endDate: string) => {
        this.setState({ currentDate: startDate})
    }

    render() {
      return <div ref={this.componentRef}>
                <Button onClick={this.weekPickerOnClick}>
                    <CalendarIcon/> {this.getWeekStartDate()} - {this.getWeekEndDate()}
                </Button>
                <Calendar 
                    month={this.getMonth('')} 
                    year={this.getYear('')}
                    daysInMonth={this.getDaysInMonth()}
                    days={this.generateDaysArray()}
                    onPreviousClick={this.previousWeekClick}
                    onNextClick={this.nextWeekClick}
                    currentDate={this.state.currentDate}
                    onWeekClick={this.onWeekClick}
                    onJumpToCurrentWeek={this.jumpToCurrentWeekOnClick}
                    display={this.state.display}
                />
            </div>
    }
}

export default WeeklyCalendar;