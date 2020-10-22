import React from "react";
import styles from "./App.module.scss";
import library from "./data/fa-library";
import Routes from "./containers/Routes"


const App = () => {
  
  return (
      <section className={styles.content}>
        <Routes />
      </section>
  );
}

export default App;
