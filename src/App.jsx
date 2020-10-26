import React, { useState } from "react";
import styles from './App.module.scss';
import Routes from "./containers/Routes"
import restaurants from "./data/restaurants";

const App = () => {

  return (
    <>
      <div>
        <Routes/>
      </div>
    </>
  )
};
export default App;
