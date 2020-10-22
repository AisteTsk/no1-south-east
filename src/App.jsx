import React, { useState } from "react";
import styles from './App.module.scss';
import CardList from "./components/CardList";
import Routes from "./container/Routes"
import LandingPage from './components/LandingPage';
import restaurants from "./data/restaurants";

const App = () => {

  // let selectedRestaurant = [];

    const [selectedRestaurant, setRestaurant] = useState([])

   //create a funtion to store clicked restaurant dails
    const individualRestaurant = (item) => {
      selectedRestaurant = item
      setRestaurant(selectedRestaurant)
    }

  
    return (
    <>
      <div>
      <Routes 
      individualRestaurant={setRestaurant}
      restaurants={restaurants} 
      selectedRestaurant={selectedRestaurant}      
    />
    </div>
    </>
    )};
    
export default App;
