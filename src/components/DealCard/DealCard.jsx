import React from "react";
import styles from "./DealCard.module.scss";
import { Link } from "@reach/router";
import RestaurantDetails from "../../components/RestaurantDetails"
import pin from '../../assets/images/pin-white.png'


const DealCard = (props) => {
    const { name, offerPercent, offerDescription, location, cuisine, validUntil, restaurantId, restaurantDescription } = props.restaurant;

    return (
        <div className={styles.card} >
            <Link to={`/restaurants/${restaurantId}`}>    
                <hr />
                <img src={"https://miro.medium.com/max/12000/1*tSRiLvTkqtMkYYC6zxUP5Q.jpeg"} alt="restaurant" />
                <h1>{name}</h1>
                <h2 className={styles.offer}> {offerPercent} Off Total Bill - Selected Days Only</h2>
                <h2 className={styles.description}>{restaurantDescription}</h2>
                <div className={styles.locationContainer}>
                    <img src={pin} alt="pin symbol" />
                    <h2>7 miles from current location</h2>
                </div> 
                <button>View offer</button>     
            </Link>
        </div>
    );
};

export default DealCard;