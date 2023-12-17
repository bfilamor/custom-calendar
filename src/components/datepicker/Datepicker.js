import React, { useEffect, useState, useRef } from 'react'
import { Calendar } from '../calendar/Calendar'
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export const Datepicker = ({ handleChange, value }) => {
    const dateInputRef = useRef();
    const [calendarActive, setCalendarActive] = useState(false);

    //'value' is the date from the user input state
    const tzoffset = value && (new Date(value)).getTimezoneOffset() * 60000; //offset in milliseconds
    const localISOTime = value && (new Date(value - tzoffset)).toISOString().slice(0, 10); //get local date by subtracting offset time

    useEffect(() => {
        const handleCalendarPopup = (e) => {
            //useRef to target input container, if ref does not contain calendar component, close the calendar
            if (!dateInputRef.current.contains(e.target)) {
                setCalendarActive(false)
            }
        }
        document.addEventListener("mousedown", handleCalendarPopup)
        //return a function that will unbind the event listener, so if the calendar is hidden, the event will not always trigger
        return () => {
            document.removeEventListener("mousedown", handleCalendarPopup)
        }
    })

    return (
        <>
            <InputGroup className='flex-column mb-3' ref={dateInputRef}>
                <div className='position-relative'>
                    <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className='text-secondary position-absolute'
                        style={{ top: "50%", transform: "translateY(-50%)", left: "10px" }}
                    />
                    <Form.Control
                        className='ps-5 bg-white'
                        style={{ cursor: "pointer" }}
                        value={value && localISOTime}
                        readOnly
                        placeholder='YYYY-MM-DD'
                        onClick={() => setCalendarActive(!calendarActive)}
                    />
                </div>
                {(calendarActive) &&
                    <div className='position-absolute z-2'
                        style={{ top: "30px" }}
                    >
                        <Calendar handleChange={handleChange} setCalendarActive={setCalendarActive} dateState={value}/>
                    </div>
                }
            </InputGroup>
        </>
    )
}
