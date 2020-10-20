import React from "react";
import styles from "./CardList.module.scss";
import DealCard from "../DealCard/DealCard";
import restaurant from "../../data/data";


const CardList = () => {

    const getCard = (restaurant) => (
        <div key={restaurant.idRapper}>
          <DealCard restaurant={restaurant} />
        </div>
    );

    return (
        <>
            <span className={styles.cardlist}>{restaurant.map(getCard)}</span>
        </>
    );
};

export default CardList;

