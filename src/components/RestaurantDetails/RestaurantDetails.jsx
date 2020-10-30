import React from 'react';
import styles from "./RestaurantDetails.module.scss";
import { Link } from "@reach/router";
import restaurants from "../../data/restaurants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        email,
        instagram,
        website,
        offerDescription,
        restaurantDescription

        
        
    } = restaurants.find(restaurant => restaurant.restaurantId == props.restaurantId);

    //this function will take the array of Booleans, filter for true and show

    const ConvertBooleanToText = (inputBooleanArray) => {
        const outputString = Object.keys(inputBooleanArray).filter((x) => (inputBooleanArray[x])).toString();
        return outputString ;
    };

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
            <p>Cuisine: {cuisine}</p><br/>
            <p>Sitting: {ConvertBooleanToText(sitting)}</p><br/>
            <p>Valid until: {validUntil}</p><br/>
            <p>Days Avalible: {daysAvailable.toString()}</p><br/>
            <p>Maximim Table Size: {maximumTableSize}</p> <br/>           
            <p>{ConvertBooleanToText(dietaryRequirements)}</p>
             
            <span className={styles.fontawesomeContainer}>
                <a href={instagram} target="_blank" > 
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
}

export default RestaurantDetails;
