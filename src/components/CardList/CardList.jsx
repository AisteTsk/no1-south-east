import React from "react";
import styles from "./CardList.module.scss";
import DealCard from "../DealCard/DealCard";
import restaurants from "../../data/restaurants";

const CardList = (props) => {
    return (
        <>
            <section className={styles.cardlist}>
                {props.restaurants.map((restaurant) => {
                    return (<DealCard key={restaurant.restaurantId} restaurant={restaurant} />)
                })}    
            </section>
        </>
    );
};

export default CardList;

