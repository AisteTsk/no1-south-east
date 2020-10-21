import React from 'react';
import styles from './SideBar.module.scss';
import Calendar from '../../utilities/Calendar';
import Icon from '../../utilities/Icon';
import ImageIcon from '../../utilities/ImageIcon';
import Checkbox from '../../utilities/Checkbox';
import Slider from '../../utilities/Slider';


import { dealTypeIcons, mealTimeIcons, dietaryIcons } from '../../../data/filterIcons';

const SideBar = ({closeFilterMenu}) => {

    const renderDealTypeIcons = dealTypeIcons.map(deal => {
        return <Icon icon={deal.icon} key={deal.id}/>
    });

    const renderMealTypeIcons = mealTimeIcons.map(meal => {
        return (
            <div>
                <ImageIcon iconActive={meal.iconActive} iconInactive={meal.iconInactive} key={meal.id} />
                <p>{meal.text}</p>
            </div>
        )
    });

    const renderDietaryIcons = dietaryIcons.map(diet => {
        return <ImageIcon iconActive={diet.iconActive} iconInactive={diet.iconInactive} key={diet.id} />
    });
        
    return (
        <div className={styles.filtermenu}>
            <a href="javascript:void(0)" className={styles.closebtn} onClick={closeFilterMenu}>&times;</a>
            <div id="when-need">
                <p>When do you want to eat?</p>
                <Calendar />
            </div>
            <hr/>
            <div id="time-need">
                <p>Breakfast, Lunch or Dinner?</p>
                {renderMealTypeIcons}
            </div>
            <hr/>
            <div id="deal-type">
                <p>Do you want a deal on a meal or bevvies?</p>
                {renderDealTypeIcons}
            </div>
            <hr/>
            <div id="dietary-need">
                <p>Any dietary needs?</p>
                {renderDietaryIcons}
            </div>
            <hr/>
            <Checkbox />
            <hr/>
            <Slider />
            <hr/> 
        </div>    
    )
}

export {SideBar as default};