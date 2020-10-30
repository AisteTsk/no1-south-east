import React from 'react';
import styles from "./RestaurantDetails.module.scss";
import { Link } from "@reach/router";
import restaurants from "../../data/restaurants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import halal from '../../assets/image_icons/halal_active.png';
import glutenfree from '../../assets/image_icons/gluten_free_active.png';
import vegan from '../../assets/image_icons/vegan_active.png';
import vegetarian from '../../assets/image_icons/vegetarian_active.png';
import dairyfree from '../../assets/image_icons/dairy_free_active.png';
import Logo from "../Logo/Logo";


const RestaurantDetails = (props) => {
    const { 
        name, 
        image, 
        offerPercent, 
        cuisine, 
        validUntil, 
        location, 
        daysAvailable, 
        maximumTableSize,
        dietaryRequirements,
        sitting,
        phoneNumber,
        email
        
    } = restaurants.find(restaurant => restaurant.restaurantId == props.restaurantId);

    const ConvertBooleanToText = (inputBooleanArray) => {
        const outputString = Object.keys(inputBooleanArray).filter((x) => (inputBooleanArray[x])).toString();
        return outputString ;
    };

    return (

        <div className={styles.RestaurantDetails}>
            <Logo/>
            <h1>{name}</h1>
            <p>Location: {location}</p>
            <p>Offer Details</p>
            <p>Offer {offerPercent}</p>
            <p>Restaurant Info</p>
            <p>Cuisine: {cuisine}</p>
            <p>Sitting: {ConvertBooleanToText(sitting)}</p>
            <p>Valid until: {validUntil}</p>
            <p>Days Avalible: {daysAvailable.toString()}</p>
            <p>Maximim Table Size: {maximumTableSize}</p>            
            <p>{ConvertBooleanToText(dietaryRequirements)}</p>
            <span className={styles.fontawesomeContainer}>
                <a href="www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "instagram"]}/>
                </a>
                <a href="www.google.com" target="_blank" rel="noopener noreferrer">
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
    )
}

export default RestaurantDetails;
