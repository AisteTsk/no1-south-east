import React from "react";
import styles from "./DealCard.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const DealCard = (props) => {
    const { name, offerPercent, cuisine, validUntil, databaseId, restaurantDescription } = props.restaurant;

    const distanceFromRestaurant = () => {
        if (props.restaurant.distanceToText) {
            return <h2>You are {props.restaurant.distanceToText} away</h2>
        } else {
            return <h2>You're location is inactive</h2>
        }
    }
    return (
        <div className={styles.card} >
            <Link to={`/restaurants/${databaseId}`}> 
                <hr />
                <img src={"https://miro.medium.com/max/12000/1*tSRiLvTkqtMkYYC6zxUP5Q.jpeg"} alt="restaurant" />
                <h1>{name}</h1>
                <h2 className={styles.offer}> {offerPercent} Off Total Bill - Selected Days Only</h2>
                <h2 className={styles.description}>{restaurantDescription}</h2>
                <div className={styles.locationContainer}>
                    <FontAwesomeIcon
                        icon={["fas", "map-marker-alt"]}
                        className={styles.pin}
                    />
                    {distanceFromRestaurant()}
                </div>
                <button>View offer</button>
            </Link>
        </div>
    );
};

export default DealCard;