import React from 'react';
import styles from './App.module.scss';
import CardList from "./components/CardList";
import Routes from "./container/Routes"
import LandingPage from './Components/LandingPage';


const App = () => {
  return (
    <>
        <LandingPage />
      <div>
    <Routes />
    </div>
    </>
    )};
    
export default App;
