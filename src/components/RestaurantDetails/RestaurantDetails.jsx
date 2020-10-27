import React from 'react';
import styles from "./Restaurant.module.scss";
import { Link } from "@reach/router";
import restaurants from "../../data/restaurants";

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
       

    return (
        <div className={styles.RestaurantDetails}>
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
            <h1>{name}</h1>
            <div>
                <h3>Restaurant Info</h3>
                <p>Cuisine: {cuisine}</p>
                <p>Location: {location}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Email Address: {email}</p>

            </div>
            <div className={styles.offerDets}>
                <h3>Offer Details</h3>
                <p>Valid until: {validUntil}</p>
                <p>Days Avalible: {daysAvailable.toString()}</p>
                <p>Maximim Table Size: {maximumTableSize}</p>
            </div>  

                {/* <p>Dietary Profile: {dietryRequirements}</p>
                <p>Sitting: {sitting}</p> */}
                {/* <p>Discount On Food: {discountOnFood}</p>
                <p>Discount On Drink: {discountOnDrink}</p> */}
        </div>
    )
}

export default RestaurantDetails;