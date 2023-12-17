import React from 'react'
import * as dateFns from 'date-fns';

export const InnerPanel = ({ dataArray, handleFunction, calendarMethod, currentDate, dateFormat }) => {
    return (
        <>
            <div className='panel--grid flex-grow-1'>
                {dataArray.map((data, index) =>
                    <div
                        className='p-1 calendar--grid__cell'
                        key={index}
                        onClick={() => handleFunction(data)}
                    >
                        <span className={`py-2 px-2 py-1 d-inline-block fs-5 calendar--grid__cell--inner ${calendarMethod(currentDate) === calendarMethod(data) ? 'calendar--selected' : ''}`}>
                            {dateFns.format(data, dateFormat)}
                        </span>
                    </div>)}

            </div>

        </>
    )
}
