import React from "react";
import styles from "./DealCard.module.scss";
import { Link } from "@reach/router";


const DealCard = (props) => {

    const { name, offerPercent, offerDescription, location, cuisine } = props.restaurant;
    
    return (
        <div className={styles.cardborder}>
        <div className={styles.card}>
            <Link to="Restaurant">
                <h1>{offerPercent}</h1>
                <img src={"https://miro.medium.com/max/12000/1*tSRiLvTkqtMkYYC6zxUP5Q.jpeg"} alt="Picture of restautant"/>
                <h2>{name}</h2>

                <div className={styles.info}>
                    <p>{cuisine}</p>
                    <p>distance</p>
                </div>

                <div className={styles.expiry}>
                    <p>Offer valid until</p>
                    <h3>31st Jan 2065</h3>
                </div>
            </Link>
        </div>
        </div>
    );
};

export default DealCard;