import React, { useState } from "react";
import styles from './App.module.scss';
import Routes from "./containers/Routes";
import library from "./data/fa-library";


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
