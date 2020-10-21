import React from 'react';
import styles from './SideBar.module.scss';
import Calendar from '../../utilities/Calendar';
import Icon from '../../utilities/Icon';
import ImageIcon from '../../utilities/ImageIcon';
import Slider from '../../utilities/Slider';

import { dealTypeIcons, mealTimeIcons, dietaryIcons } from '../../../data/filterIcons';

const SideBar = ({closeFilterMenu, filterRestaurants}) => {

    // create filter parameters array
    let filterParameters = {
        discountOnFood : false,
        discountOnDrinks: false,
    }

    // function to collect filter data - this will be passed down into the side bar
    const collectFilters = (filterType, value) => {
        // update an arary with filter preferences this needs to be passed down to each component
        filterParameters[`${filterType}`] = value;
        console.log(filterParameters);
    }

    // fire filtering as filter button has been clicked
    const filtering = () => {
        filterRestaurants(filterParameters);
        closeFilterMenu();
    }

    // map loops for all component rendering - this one is for deal icons
    const renderDealTypeIcons = dealTypeIcons.map(deal => {
        return <Icon icon={deal.icon} filterType={deal.filterType} collectFilters={collectFilters} key={deal.id}/>
    });

    // and this one is for meal type icons (breakfast, lunch, dinner)
    const renderMealTypeIcons = mealTimeIcons.map(meal => {
        return (
            <div>
                <ImageIcon iconActive={meal.iconActive} iconInactive={meal.iconInactive} key={meal.id} />
                <p>{meal.text}</p>
            </div>
        )
    });

    // this little piggy is for dietary icons
    const renderDietaryIcons = dietaryIcons.map(diet => {
        return <ImageIcon iconActive={diet.iconActive} iconInactive={diet.iconInactive} key={diet.id} />
    });

    // return the lot     
    return (
        <div className={styles.filtermenu}>
            <a href="#" className={styles.closebtn} onClick={closeFilterMenu}>&times;</a>
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
            <Slider />
            <hr/> 
            <button onClick={filtering}>Filter</button>
        </div>    
    )
}

export {SideBar as default};