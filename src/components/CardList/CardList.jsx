import React from "react";
import styles from "./CardList.module.scss";
import DealCard from "../DealCard";


const CardList = (props) => {

    const getCard = (restaurants) => (
        <div key={restaurants.idRapper}>
          <DealCard individualRestaurant={props.individualRestaurant} restaurants={restaurants} />
        </div>
    );
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

