import React from "react";
import styles from "./Dashboard.module.scss";
import Card from "../../component/filterFunctionality/Card";
import restaurants from "../../data/restaurants";
import CardList from "../../component/filterFunctionality/CardList";
import FeedbackPanel from "../../component/filterFunctionality/FeedbackPanel";
import LandingPage  from "../../components/LandingPage";

const DashBoard = () => {

  return (
    <>
      
      <div>
        <LandingPage />
      </div>
    </>
    );
};

export default DashBoard;