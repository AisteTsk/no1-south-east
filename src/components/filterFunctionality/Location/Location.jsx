import React, { useState } from 'react';
import styles from './Location.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleApiWrapper } from 'google-maps-react';

import keys from '../../../data/keys';

const Location = ({ filteredList, google, setFilteredList }) => {

    const [userLocation, setUserLocation] = useState(null);

     // get users location when share location button is clicked.
    const getLocation = () => {

        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {

                // grab user location and set state
                const userPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                setUserLocation(userPosition);
            });
        }
    }

    const calcDistances = () => {

        // create google coords objects for each restaurant location
        const restaurantLocations = filteredList.map(restaurant => new google.maps.LatLng(restaurant.location[0], restaurant.location[1])); 

        // TODO - google API services will only take 25 origins and destinations in a single request, this will need dealing with...
        const service = new google.maps.DistanceMatrixService();

        service.getDistanceMatrix(
            {
                origins: [userLocation],
                destinations: restaurantLocations,
                travelMode: 'DRIVING',
            }, (response, status) => {
                if(status == 'OK'){

                    // grab response and drill down to data we need i.e. distances to
                    const results = response.rows[0].elements;

                    // for each restaurant cycle over the returned data and pull out the distance
                    for (let i = 0; i < results.length; i++) {

                        const element = results[i];

                        filteredList[i].distanceTo = element.distance.value;
                        filteredList[i].distanceToText = element.distance.text;

                    }
                    
                    const sortedList = filteredList.sort((restaurantA, restaurantB) => restaurantA.distanceTo - restaurantB.distanceTo);
                    
                    // set the state on the deals page
                    setFilteredList(sortedList);
                }
            }
        );
    }
        
    const sharedPos = userLocation ? calcDistances() : null
        
    return (
        <div className={styles.location}>
            <span className={styles.fa} onClick={getLocation}><FontAwesomeIcon icon={["far", "compass"]} className={styles.fa} /></span>
            {sharedPos}
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: (keys)
  })(Location)

