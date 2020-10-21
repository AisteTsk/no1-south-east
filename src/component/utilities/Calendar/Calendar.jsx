import React from 'react'
import styles from './Calendar.module.scss';

const Calendar = () => {

    const today = new Date();

    const handleChange = () => {
        // do something with the date like filter...
    }

    return (
        <form id="chooseEatDate">
            <input type="date" name="diningDate" min={today} onchange={handleChange}/>
        </form>
    )
}

export default Calendar
