import React from 'react';
import styles from "./Restaurant.module.scss";
import { Link } from "@reach/router";

const RestaurantDetails = (props) => {
    
     const { name, image, offerPercent, offerDescription, location, cuisine, 
        validUntil, daysAvailable, maximumTableSize, dietryRequirements, sitting, discountOnFood, discountOnDrink } = props.restaurants[0]

    return (
        <div className={styles.RestaurantDetails}>
            <h1>{name}</h1>

            <div className={styles.container}>    
                <div className={styles.image}>
                    <img className={styles.responsiveImage} src={image} alt="Restaurant Image"/>
                </div>
                <div className={styles.flexCol}>
                <Link to="/SignUp" >   
                    <button>redeem</button>
                </Link>
                    <p>Offer {offerPercent}</p>
                </div>
            </div>
                <p>Cusine: {cuisine}</p>
                <p>Valid Until: {validUntil}</p>
                <p>Location: {location}</p>
                <p>Days Avalible: {daysAvailable}</p>
                <p>Maximim Table Size: {maximumTableSize}</p>
                <p>Dietary Profile: {dietryRequirements}</p>
                <p>Sitting: {sitting}</p>
                <p>Discount On Food: {discountOnFood}</p>
                <p>Discount On Drink: {discountOnDrink}</p>
        </div>
    )
}

export default RestaurantDetails;