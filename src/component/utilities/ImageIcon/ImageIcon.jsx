import React, { useState } from 'react';
import styles from './ImageIcon.module.scss';

const ImageIcon = ({iconActive, iconInactive}) => {
    
    const [isToggle, setIsToggle] = useState(false);

    // just the image location prefix
    const srcPrefix = './assets/image_icons';

    const handleClick = (e) => {
        e.stopPropagation();
        setIsToggle(!isToggle);
    }

    const toggled = isToggle ? `${srcPrefix}${iconActive}` : `${srcPrefix}/${iconInactive}`;
    console.log(toggled);
    return (
        <div onClick={handleClick}>
            <img src={toggled} alt="not found"/>
        </div>
    )
}

export {ImageIcon as default};