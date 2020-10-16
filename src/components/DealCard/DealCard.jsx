import React from "react";
import styles from "./DealCard.module.scss";

const DealCard = () => {
    return (
        <>
            <div className={styles.card}>
                <h1>Offer/Discount</h1>
                <img src={"https://miro.medium.com/max/12000/1*tSRiLvTkqtMkYYC6zxUP5Q.jpeg"} alt="Picture of restautant"/>
                <h2>Restaurant name</h2>
                
                <div className={styles.info}>
                <p>Cuisine</p>
                <p>P05 C0D</p>
                </div>

                <div className={styles.expiry}>
                <p>Offer valid until</p>
                <h3>31st Jan 2065</h3>
                </div>
            </div>
        </>
    );
};

export default DealCard;

