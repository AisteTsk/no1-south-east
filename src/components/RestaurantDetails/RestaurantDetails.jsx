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
            return ('Vegetarian')
            } 
        }
    const dietaryRequirementsVegan = () => {
        if (dietaryRequirements.vegan == true) {
            return ('Vegan')
            } 
        }
    const dietaryRequirementsGlutenFree = () => {
        if (dietaryRequirements.glutenfree == true){
            return ('glutenfree')
                } 
            }
    const dietaryRequirementsHalal = () => {
        if (dietaryRequirements.halal == true) {
            return ('Halal')
            }
        }
    const dietaryRequirementsDiaryFree = () => {
            if (dietaryRequirements.diaryfree == true) {
                return ('diaryfree')
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
            <p> {dietaryRequirementsVegan()},               
                {dietaryRequirementsVegetarian()},
                {dietaryRequirementsGlutenFree()},
                {dietaryRequirementsHalal()},
                {dietaryRequirementsDiaryFree()}
            </p>
            <span className={styles.fontawesomeContainer}>
                <span>
                    <FontAwesomeIcon icon={["fab", "instagram"]}/>
                </span>
                <FontAwesomeIcon icon={["fa", "globe"]}/>
                <FontAwesomeIcon icon={["fas", "phone-alt"]}/>
                <a href={"mailto:`${email}`subject=test%20email"} target="_blank" rel="noopener noreferrer">
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
