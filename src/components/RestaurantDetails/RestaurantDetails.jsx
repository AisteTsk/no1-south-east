import React, { useState, useEffect } from 'react';
import styles from "./RestaurantDetails.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo/Logo";

import { firestore } from '../../firebase';

const RestaurantDetails = (props) => {

    const [restaurantData, setrestaurantData] = useState()

    //*****importing data from firestore*****//    
    
    const fetchRestaurants = () => {

        firestore
        .collection("deals")
        .doc(props.databaseId)
        .get()
        .then((doc) => {
            setrestaurantData(doc.data());
        }).catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchRestaurants()
    },[])

    // function for each diary requirment image - can be improved
       
    const ConvertBooleanToText = (inputBooleanArray) => {
        const outputString = Object.keys(inputBooleanArray).filter((x) => (inputBooleanArray[x])).join(', ');
        return outputString ;
    };

    if(restaurantData) {

        const { 
            name, 
            image, 
            cuisine, 
            validUntil,
            location, 
            daysAvailable, 
            maximumTableSize,
            dietaryRequirements,
            sitting,
            phoneNumber,
            email,
            instagram,
            website,
            offerDescription,
            restaurantDescription
        } = restaurantData;
        return (
            <>
            <Logo/>
            <div className={styles.RestaurantDetails}>
                <h1>{name}</h1>
                <div className={styles.image}>
                    <img className={styles.responsiveImage} src={image} alt={name}/> 
                </div>          
                <p>Location: {location}</p><br/>
                <p>Offer Details:</p>
                <p>{offerDescription}</p><br/>
                <p>Restaurant Info:</p>
                <p>{restaurantDescription}</p><br/>
                <p>Cuisine: {cuisine.join(', ')}</p><br/>
                <p>Sitting: {ConvertBooleanToText(sitting)}</p><br/>
                <p>Valid until: {validUntil}</p><br/>
                <p>Days Avalible: {daysAvailable.join(', ')}</p><br/>
                <p>Maximim Table Size: {maximumTableSize}</p> <br/>           
                <p>{ConvertBooleanToText(dietaryRequirements)}</p>
                <span className={styles.fontawesomeContainer}>
                    <a href={instagram} target="_blank" rel="noopener noreferrer" > 
                        <FontAwesomeIcon icon={["fab", "instagram"]}/>
                    </a>
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={["fa", "globe"]}/>
                    </a> 
                    <a href={`tel: ${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={["fas", "phone-alt"]}/>
                    </a>
                    <a href={`mailto: ${email}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={["fas", "envelope"]} />
                    </a>
                </span>
                <Link to="/SignUp" >   
                    <button>Get Code</button>
                </Link>
            </div>
            </>
        )
    } else { 
        return (
            <p>Loading....</p>
        )
    } 
}

export default RestaurantDetails;
