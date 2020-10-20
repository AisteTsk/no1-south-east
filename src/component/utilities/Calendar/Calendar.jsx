import React from 'react'
import styles from './Calendar.module.scss';

const Calendar = () => {

    const today = new Date();

    const handleChange = () => {
        // do something with the date like filter...
    }

    return (
        <form id="chooseEatDate">
            <label htmlFor="diningDate">When do you want to eat? (I know the answer is all the time but be more specific please)</label>
            <input type="date" name="diningDate" min={today} onchange={handleChange}/>
        </form>
    )
}

export default Calendar
