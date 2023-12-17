import React, { useState } from 'react';
import './calendar.css'
import * as dateFns from 'date-fns';
import { YearsPanel } from './YearsPanel';
import { MonthsPanel } from './MonthsPanel';
import { PanelHeader } from './PanelHeader';

export const Calendar = ({ fullWidth, handleChange }) => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isMonthsPanelActive, setIsMonthsPanelActive] = useState(false);
    const [isYearsPanelActive, setIsYearsPanelActive] = useState(false);

    //find the first day of currentDate
    const firstDay = dateFns.startOfMonth(currentDate);
    //find the last day of currentDate
    const lastDay = dateFns.lastDayOfMonth(currentDate);
    //Find the first day of week of firstDay
    const startDate = dateFns.startOfWeek(firstDay);
    //find the last day of week of lastDay
    const endDate = dateFns.lastDayOfWeek(lastDay);
    //render all days
    const totalDates = () => {
        let days = dateFns.eachDayOfInterval({ start: startDate, end: endDate });
        //add new days if the total dates is less than 42, making sure that each view has 6 rows of dates
        for (let i = days.length; i < 42; i++) {
            days.push(dateFns.addDays(startDate, i));
        }
        return days;
    }

    //generate an array of day names based on the total dates
    const weeks = (date => {
        let weeks = [];
        for (let day = 1; day <= 7; day++) {
            weeks.push(date[day])
        }
        return weeks;
    })(totalDates());

    //adds current day class to the current date
    const isToday = (day) => dateFns.isSameDay(day, today);
    // adds selected day class to the selected date
    const isSelectedDate = (day) => dateFns.isSameDay(day, selectedDate);

    //hide month and years panels if month is selected
    const handleHidePanels = () => {
        setIsYearsPanelActive(false);
        setIsMonthsPanelActive(false);
    }

    const handleDateChange = (date) => {
        //if handleChange is passed as props/ datepicker component is used
        if (handleChange) {
            handleChange(date);
            setSelectedDate(date);
        } else {
            setSelectedDate(date);
        }
    }


    const panelProps = { currentDate, setCurrentDate, today, handleHidePanels, setIsYearsPanelActive };

    return (
        <div className={`calendar--container bg-white position-relative border p-3 my-3 shadow-sm rounded-3 ${fullWidth ? 'mw-100' : ''}`}>
            {(isYearsPanelActive) &&
                <YearsPanel panelProps={panelProps} />
            }

            {
                (isMonthsPanelActive) &&
                <MonthsPanel panelProps={panelProps} />
            }

            <PanelHeader
                handlePrev={() => setCurrentDate(dateFns.subMonths(currentDate, 1))}
                handleNext={() => setCurrentDate(dateFns.addMonths(currentDate, 1))}
                handleClick={() => setIsMonthsPanelActive(true)}
            >
                {dateFns.format(currentDate, 'MMM')} {dateFns.format(currentDate, 'yyy')}
            </PanelHeader>


            <div className='calendar--grid fw-bold'>
                {weeks.map((week, index) => <div key={index}>{dateFns.format(week, 'eee')}</div>)}
            </div>
            <div className='calendar--grid'>
                {totalDates().map((date, index) =>
                    <div className={`calendar--grid__cell  ${isToday(date) ? 'calendar--current' : ''}`} key={index}
                        style={{
                            color: !dateFns.isSameMonth(date, currentDate) ? '#ddd' : '#000',
                        }}
                        onClick={() => { handleDateChange(date) }}
                    >
                        <span className={`d-inline-block calendar--grid__cell--inner  ${isSelectedDate(date) ? 'calendar--selected' : ''}`}>
                            {dateFns.format(date, 'd')}
                        </span>
                    </div>)}
            </div>
        </div>
    )
}
