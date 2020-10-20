import React from 'react';
<<<<<<< HEAD
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
=======
import './App.css';
import Restaurant from './data/data';
import LandingPage from './Components/LandingPage';

const App = () => {
  return (
    <div className="App">
      <LandingPage />
    </div>
>>>>>>> f38026a2b2b6c25009261d7aad252033ef821fe3
  );
}

export default App;
