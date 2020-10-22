import React from "react";
import styles from "./CardList.module.scss";
import DealCard from "../DealCard/DealCard";
import restaurants from "../../data/restaurants";


const CardList = () => {
    const getCard = (restaurants) => (
        <div key={restaurants.idRapper}>
          <DealCard restaurants={restaurants} />
        </div>
    );
    return (
        <>
            <span className={styles.cardlist}>{restaurants.map(getCard)}</span>
        </>
    );
};

export default CardList;

