import React from "react";
import styles from "./CardList.module.scss";
import DealCard from "../DealCard/DealCard";
import FeedbackPanel from "../../component/filterFunctionality/FeedbackPanel";


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

