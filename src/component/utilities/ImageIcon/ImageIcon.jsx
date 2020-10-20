import React, { useState } from 'react';
import styles from './ImageIcon.module.scss';


const ImageIcon = ({iconActive, iconInactive}) => {
    
    const [isToggle, setIsToggle] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        setIsToggle(!isToggle);
    }

    // require(toggled)
    const image = require('../../../assets/image_icons/vegetarian_inactive.png')
    const toggled = isToggle ? require(`../../../assets/image_icons/${iconActive}`) : require(`../../../assets/image_icons/${iconInactive}`);

    return (
        <span onClick={handleClick}>
            <img src={toggled} alt="not found"/>
        </span>
    )
}

export {ImageIcon as default};