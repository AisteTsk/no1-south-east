import React from 'react';
import styles from "./RestaurantDetails.module.scss";
import { Link } from "@reach/router";
import restaurants from "../../data/restaurants";
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import halal from '../../assets/image_icons/halal_active.png';
import glutenfree from '../../assets/image_icons/gluten_free_active.png';
import vegan from '../../assets/image_icons/vegan_active.png';
import vegetarian from '../../assets/image_icons/vegetarian_active.png';
import dairyfree from '../../assets/image_icons/dairy_free_active.png';


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


    // function for each diary requirment image - can be improved
    
    const dietaryRequirementsVegetarian = () => {
        if (dietaryRequirements.vegetarian == true) {
            return (<img  src={vegetarian} alt="vegan option"/>)
            } 
        }
    const dietaryRequirementsVegan = () => {
        if (dietaryRequirements.vegan == true) {
            return (<img  src={vegan} alt="vegan option"/>)
            } 
        }
    const dietaryRequirementsGlutenFree = () => {
        if (dietaryRequirements.glutenfree == true){
            return (<img  src={glutenfree} alt="glutenfree option"/>)
                } 
            }
    const dietaryRequirementsHalal = () => {
        if (dietaryRequirements.halal == true) {
            return (<img  src={halal} alt="glutenfree option"/>)
            }
        }
    const dietaryRequirementsDiaryFree = () => {
            if (dietaryRequirements.diaryfree == true) {
                return (<img  src={dairyfree} alt="glutenfree option"/>)
                }
            }      

    return (
        <div className={styles.RestaurantDetails}>
            <div className={styles.imageLogo}>
                <img className={styles.responsiveImageLogo} src={logo} alt="logo"></img>
            </div>
            <h1>{name}</h1>
            <div className={styles.image}>
                <img className={styles.responsiveImage} src={image} alt="Restaurant"/>
            </div>
            <p>Location: {location}</p>
            <p>Offer Details</p>
            <p>Offer {offerPercent}</p>
            <p>Restaurant Info</p>
            <p>Cuisine: {cuisine}</p>
            <p>sitting: {sitting.toString()}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Email Address: {email}</p>
            <p>Valid until: {validUntil}</p>
            <p>Days Avalible: {daysAvailable.toString()}</p>
            <p>Maximim Table Size: {maximumTableSize}</p>
            <span className={styles.dietaryImages}>
                {dietaryRequirementsVegan()}
                {dietaryRequirementsVegetarian()}
                {dietaryRequirementsGlutenFree()}
                {dietaryRequirementsHalal()}
                {dietaryRequirementsDiaryFree()}
            </span>
            <span className={styles.fontawesomeContainer}>
                <span>
                    <FontAwesomeIcon icon={["fab", "instagram"]}/>
                </span>
                <FontAwesomeIcon icon={["fa", "globe"]}/>
                <FontAwesomeIcon icon={["fas", "phone-alt"]}/>
                <FontAwesomeIcon icon={["fas", "envelope"]}/>
            </span>
            <Link to="/SignUp" >   
                <button>Get Code</button>
            </Link>
        </div>
    )
}

export default RestaurantDetails;
