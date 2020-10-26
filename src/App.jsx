import React from 'react';
import './App.module.css';
import Restaurant from '../src/data/restaurants';
import LandingPage from "./components/LandingPage/LandingPage";
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
