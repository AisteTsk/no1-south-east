import React from 'react';
import styles from './Slider.module.scss';

const Slider = () => {

    return (
        <div>
            <div className={styles.slider}>
                <input type="range" min="1" max="12" value={this.state.value} className="slider" onChange={this.handleOnChange}></input>

            </div>
        </div>
    )
}

export {Slider as default};

