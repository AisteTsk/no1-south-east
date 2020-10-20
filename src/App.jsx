import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import CardList from "./components/CardList";
import Routes from "./container/Routes"


function App() {
  return (
    <>
    <div className={styles.App}>
      <CardList />
    </div>

    <div>
    <Routes />
    </div>
    </>
  );
}

export default App;
