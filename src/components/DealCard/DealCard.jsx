import React, { useState } from "react";
import styles from "./DealCard.module.scss";
import { Link } from "@reach/router";
import pin from "../../assets/images/pin-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DealCard = (props) => {
  const {
    name,
    offerPercent,
    cuisine,
    validUntil,
    databaseId,
    restaurantDescription,
  } = props.restaurant;

  const [favState, setFavState] = useState(isFav);

  const handleFavCLick = () => {
    e.stopPropagation();
    setFavState;
  };

  const distanceFromRestaurant = () => {
    if (props.restaurant.distanceToText) {
      return <h2>You are {props.restaurant.distanceToText} away</h2>;
    } else {
      return <h2>Your location is inactive</h2>;
    }
  };
  return (
    <div className={styles.card}>
      <hr />
      <img
        src={"https://miro.medium.com/max/12000/1*tSRiLvTkqtMkYYC6zxUP5Q.jpeg"}
        alt="restaurant"
      />
      <div className={styles.restaurantName}>
        <h1>{name}</h1>
        <span className={styles.heart} onClick={handleFavClick()}>
          <FontAwesomeIcon icon={["fa", "heart"]} className={styles.heart} />
        </span>
      </div>

      <h2 className={styles.offer}>
        {offerPercent} Off Total Bill - Selected Days Only
      </h2>
      <h2 className={styles.description}>{restaurantDescription}</h2>
      <div className={styles.locationContainer}>
        <img src={pin} alt="pin symbol" />
        {distanceFromRestaurant()}
      </div>
      <Link to={`/restaurants/${databaseId}`}>
        <button>View offer</button>
      </Link>
    </div>
  );
};

export default DealCard;
