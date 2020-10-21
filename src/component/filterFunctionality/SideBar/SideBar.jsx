import React from 'react';
import styles from './SideBar.module.scss';
import Calendar from '../../utilities/Calendar';
import Icon from '../../utilities/Icon';
import ImageIcon from '../../utilities/ImageIcon';
import Checkbox from '../../utilities/Checkbox';
import Slider from '../../utilities/Slider';


import { dealTypeIcons, dietaryIcons } from '../../../data/filterIcons';

const SideBar = ({closeFilterMenu}) => {

    const renderDealTypeIcons = dealTypeIcons.map(deal => {
        return <Icon icon={deal.icon} key={deal.key}/>
    });

    const renderDietaryIcons = dietaryIcons.map(diet => {
        return <ImageIcon iconActive={diet.iconActive} iconInactive={diet.iconInactive} key={diet.key} />
    });
        
    return (
        <div className={styles.filtermenu}>
            <a href="javascript:void(0)" className={styles.closebtn} onClick={closeFilterMenu}>&times;</a>
            <Calendar />
            <hr/>
            <p>Do you want a deal on a meal or bevvies?</p>
            <div id="deal-type">
                {renderDealTypeIcons}
            </div>
            <hr/>
            <p>Any dietary needs?</p>
            <div id="dietary-need">
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