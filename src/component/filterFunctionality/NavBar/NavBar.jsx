import React from "react";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import SearchBar from "../SearchBar";

const NavBar = (props) => {
  const {updateSearchText} = props;
  return (
    <nav className={styles.navFlex}>
      <div className={styles.searchPanel}>
        <SearchBar placeholder="Search for restaurants..." updateSearchText={updateSearchText}/>
      </div>
    </nav>
  );
};

export default NavBar;
