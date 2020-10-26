import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const {
    name,
  } = props.restaurant;
  // const [isFaceDown, setIsFaceDown] = useState(false);

  // const { recipe, toggleFav } = props;
  // const flipStyles = isFaceDown ? styles.faceDown : "";

  return (
    <h2>{name}</h2>
    //   </div>
    //   <div className={styles.back}>
    //     <CardBack recipe={recipe} toggleFav={toggleFav} />
    //   </div>
    // </section>
  );
};

export default Card;
