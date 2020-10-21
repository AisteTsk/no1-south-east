import React, { useState } from "react";
import styles from "./App.module.scss";
import library from "./data/fa-library";
import FilterButton from './component/filterFunctionality/FilterButton';
// import NavBar from "./component/filterFunctionality/NavBar";
// import Routes from "./containers/Routes";
import restaurants from "./data/restaurants";
import CardList from "./components/CardList";
import Routes from "./container/Routes"
import LandingPage from './components/LandingPage';

const App = () => {
  // const [searchText, setsearchText] = useState("")
  return (
    <>
      <section className={styles.nav}>
        {/* <NavBar updateSearchText={setsearchText} /> */}
        <FilterButton />
      </section>
      <section className={styles.content}>
        <Routes searchText={searchText}/>
      </section>
    </>
  );
}

export default App;
