import React from 'react';
import styles from "./Restaurant.module.scss";
import { Link } from "@reach/router";
import restaurants from "../../data/restaurants";
import logo from '../../assets/images/logo.png';

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
            <div className={styles.imageLogo}>
                <img className={styles.responsiveImageLogo} src={logo} alt="logo"></img>
            </div>
            <h1>{name}</h1>
            <div className={styles.image}>
                <img className={styles.responsiveImage} src={image} alt="Restaurant Image"/>
            </div>
            <p>Location: {location}</p>
            <p>Offer Details</p>
            <p>Offer {offerPercent}</p>
            <p>Restaurant Info</p>
            <p>Cuisine: {cuisine}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Email Address: {email}</p>
            <p>Valid until: {validUntil}</p>
            <p>Days Avalible: {daysAvailable.toString()}</p>
            <p>Maximim Table Size: {maximumTableSize}</p>
            <Link to="/SignUp" >   
                <button>Get Code</button>
            </Link>
        </div>
    )
}

export default RestaurantDetails;

                /* <p>Dietary Profile: {dietryRequirements}</p>
                <p>Sitting: {sitting}</p> */
                /* <p>Discount On Food: {discountOnFood}</p>
                <p>Discount On Drink: {discountOnDrink}</p> */