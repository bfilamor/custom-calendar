import React from 'react';
import * as dateFns from 'date-fns';
import { InnerPanel } from './InnerPanel';
import { PanelHeader } from './PanelHeader';
import { Panel } from './Panel';

export const MonthsPanel = ({ panelProps }) => {
    const { currentDate, setCurrentDate, today, handleHidePanels, setIsYearsPanelActive } = panelProps;

    //get all months into an array
    const months = dateFns.eachMonthOfInterval({
        start: dateFns.startOfYear(today),
        end: dateFns.endOfYear(today)
    })
    //change the current date into the selected month
    const handleMonthSelect = (month) => {
        setCurrentDate(dateFns.setMonth(currentDate, dateFns.getMonth(month)));
        handleHidePanels();
    }
    return (
        <Panel zIndex={2}>
            <PanelHeader
                handlePrev={() => setCurrentDate(dateFns.subYears(currentDate, 1))}
                handleNext={() => setCurrentDate(dateFns.addYears(currentDate, 1))}
                handleClick={() => setIsYearsPanelActive(true)}
            >
                {dateFns.format(currentDate, 'yyy')}
            </PanelHeader>

            <InnerPanel dataArray={months} calendarMethod={dateFns.getMonth} handleFunction={handleMonthSelect} currentDate={currentDate} dateFormat={'MMM'} />
        </Panel>
    )
}
