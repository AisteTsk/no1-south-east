import React from 'react';
import styles from './Slider.module.scss';

const Slider = () => {

    return (
        <div>
            <div className={styles.slider}>
                <input type="range" min="1" max="10" value="50" class="slider" id="myRange"></input>
            </div>
        </div>
    )
}

export {Slider as default};