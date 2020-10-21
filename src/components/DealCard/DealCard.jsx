import React from "react";
import styles from "./DealCard.module.scss";
import { Link } from "@reach/router";
import RestaurantDetails from "../../components/RestaurantDetails"

const DealCard = (props) => {

    const { name, offerPercent, offerDescription, location, cuisine, validUntil } = props.restaurants;

    const handleClick = (e) => {
        console.log(props.restaurants)
        return  (<div>
                <RestaurantDetails restaurants={props.restaurants} />
                </div>);
      };

    return (
            <Link to="RestaurantDetails">
            <div className={styles.card} onClick={handleClick} >
                    <h1>{offerPercent}</h1>
                    <img src={"https://miro.medium.com/max/12000/1*tSRiLvTkqtMkYYC6zxUP5Q.jpeg"} alt="Picture of restaurant"/>
                    <h2>{name}</h2>

                    <div className={styles.info}>
                        <p>{cuisine}</p>
                        <p>distance</p>
                    </div>

                    <div className={styles.expiry}>
                        <p>Offer valid until</p>
                    <h3>{validUntil}</h3>
                    </div>
            </div>
            </Link>
       );
};

export default DealCard;