import React, { useState } from 'react';
import styles from './Location.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Location = ({sortLocation}) => {
    
    const [userPosition, setUserPosition] = useState("");

    const getLocation = () => {

        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                const location = `${position.coords.latitude},${position.coords.longitude}`;
                setUserPosition(location);
                sortLocation(location);
            });
        } else {
            setUserPosition("");
        }
    }
        
        const sharedPos = userPosition.length? null : <p className={styles.location}>Please click above to share your location</p>
        
    return (
        <div>
            <span className={styles.fa} onClick={getLocation}><FontAwesomeIcon icon="street-view" className={styles.fa} /></span>
            {sharedPos}
        </div>
    );
}

export default Location;

