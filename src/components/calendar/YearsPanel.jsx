import React, { useState } from 'react';
import * as dateFns from 'date-fns';
import { InnerPanel } from './InnerPanel';
import { PanelHeader } from './PanelHeader';
import { Panel } from './Panel';

export const YearsPanel = ({ panelProps }) => {
    const { currentDate, setCurrentDate, setIsYearsPanelActive } = panelProps;
    const [currentDecade, setCurrentDecade] = useState(dateFns.startOfDecade(currentDate));

     //get all years within the current decade into an array
    const years = dateFns.eachYearOfInterval({
        start: dateFns.startOfDecade(currentDecade),
        end: dateFns.endOfDecade(currentDecade)
    })
    //change the current year into the selected year within the decade
    const handleYearSelect = (year) => {
        setCurrentDate(dateFns.setYear(currentDate, dateFns.format(year, 'yyy')));
        setIsYearsPanelActive(false);
    }

    return (
        <Panel zIndex={3}>
            <PanelHeader
                handlePrev={() => setCurrentDecade(dateFns.subYears(currentDecade, 10))}
                handleNext={() => setCurrentDecade(dateFns.addYears(currentDecade, 10))}
            >
                {dateFns.format(currentDecade, 'yyy')} - {parseInt(dateFns.format(currentDecade, 'yyy')) + 9}
            </PanelHeader>

            <InnerPanel dataArray={years} calendarMethod={dateFns.getYear} handleFunction={handleYearSelect} currentDate={currentDate} dateFormat={'yyy'} />

        </Panel>

    )
}
