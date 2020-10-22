 import React from 'react';
 import styles from "./Dashboard.module.scss";
 import CardList from "../../components/CardList/CardList"
 import LandingPage  from "../../components/LandingPage";

 
 const Dashboard = () => {
     return (
       <>
        <div>
          <LandingPage />
        </div>
        <div className={styles.App}>
          <CardList /> 
        </div>
      </>
     ) 
 }
 
 export default Dashboard;