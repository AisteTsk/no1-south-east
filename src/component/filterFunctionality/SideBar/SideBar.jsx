import React from 'react';
import styles from './SideBar.module.scss';
import Calendar from '../../utilities/Calendar';
import Icon from '../../utilities/Icon';
import ImageIcon from '../../utilities/ImageIcon';
import Checkbox from '../../utilities/Checkbox';
import Slider from '../../utilities/Slider';
import SearchBar from '../../utilities/SearchBar';

const SideBar = () => {

    const dealTypeIcons = [
        {icon: ["fas", "pizza-slice"], id: 'deal1'},
        {icon: ["fas", "glass-cheers"], id: 'deal2'}
    ];
    // ../../../assets/image_icons/
    const dietaryIcons = [
        {iconInactive: 'vegetarian_symbol_inactive.png', iconActive: 'vegetarian_symbol_active.png', id: 'diet1'},
        {iconInactive: 'vegan_symbol_inactive.png', iconActive: 'vegan_symbol_active.png', id: 'diet2'},
        {iconInactive: 'halal_symbol_inactive.png', iconActive: 'halal_symbol_active.png', id: 'diet3'},
        {iconInactive: 'gluten_free_inactive.png', iconActive: 'gluten_free_active.png', id: 'diet4'},
        {iconInactive: 'dairy_free_inactive.png', iconActive: 'dairy_free_active.png', id: 'diet5'}
    ];

    const renderDealTypeIcons = dealTypeIcons.map(deal => {
        return <Icon icon={deal.icon} key={deal.key}/>
    });

    const renderDietaryIcons = dietaryIcons.map(diet => {
        return <ImageIcon iconActive={diet.iconActive} iconInactive={diet.iconInactive} key={diet.key} />
    });
        
    return (
        <div>
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
            <SearchBar />    
        </div>    
    )
}

export {SideBar as default};