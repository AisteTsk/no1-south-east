import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = (props) => {

  const getCardJsx = (restaurant) => (
    <div className={styles.card} key={restaurant.idRestaurant}>
      <Card restaurant={restaurant} toggleFav={props.toggleFav} />
    </div>
  );

  return <section className={styles.cards}>{props.restaurants.map(getCardJsx)}</section>;
};

export default CardList;