import React, { useState } from 'react';
import styles from './Icon.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({icon}) => {

    const [isToggle, setIsToggle] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        setIsToggle(!isToggle);
    }

    const toggled = isToggle ? styles.toggle : null;

    return (
        <span className={toggled} onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
        </span>
    )
}

export {Icon as default};