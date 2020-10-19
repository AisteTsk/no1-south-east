import React from 'react';
import styles from './SideBar.module.scss';
import Calendar from '../../utilities/Calendar';
import Icon from '../../utilities/Icon';
import Checkbox from '../../utilities/Checkbox';
import Slider from '../../utilities/Slider';
import SearchBar from '../../utilities/SearchBar';

const SideBar = () => {

    const dealTypeIcons = [
        {icon: ["fas", "pizza-slice"], id: 1},
        {icon: ["fas", "glass-cheers"], id: 2}
    ];

    const renderDealTypeIcons = dealTypeIcons.map(deal => {
        return <Icon icon={deal.icon} key={deal.key}/>
    });
        
    return (
        <div>
            <Calendar />
            <div id="deal-type">
                {renderDealTypeIcons}
            </div>
            <Checkbox />
            <Slider />
            <SearchBar />    
        </div>    
    )
}

export {SideBar as default};