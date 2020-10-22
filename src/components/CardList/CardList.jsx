import React from "react";
import styles from "./CardList.module.scss";
import DealCard from "../DealCard";


const CardList = ({restaurants}) => {
   

    return (
        <>
            <section className={styles.cardlist}>{restaurants.map((restaurant) => (
                    <DealCard key={restaurant.restaurantId} restaurant={restaurant} />
            ))}
            </section>
        </>
    );
};


export default CardList;

