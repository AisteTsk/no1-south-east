import React from "react";
import styles from "./LandingPage.module.scss";
import imageStepOne from '../../assets/images/image1.png';
import imageStepTwo from '../../assets/images/image2.png';
import imageStepThree from '../../assets/images/image3.png';
import logoCutlery from "../../assets/images/logoCutlery.png";
import { Link } from "@reach/router";


const LandingPage = () => {
    return(
        <section className={styles.landingPage}>
            <div className={styles.gridContainer}>
                <div className={styles.topLeft}>
                    <img src= {logoCutlery} alt="cutlery for logo"/>
                </div>
                <div className={styles.bottomLeft}></div>
                <div className={styles.middle}>
                    <p>No.1 South East</p>
                </div>
                <div className={styles.topRight}></div>
                <div className={styles.bottomRightMobile}></div>
                <div className={styles.bottomRight}>
                    <div className={styles.buttons}>
                        <Link to="SignUp">
                            <button className={styles.LandingPageButton}>Sign In ></button>
                        </Link>
                        <Link to="">
                            <button className={styles.LandingPageButton}>Register ></button>
                        </Link>
                        <Link to="browseDeals">
                            <button className={styles.LandingPageButton}>View Offers ></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.registration}>
                    <div className={styles.registrationProcess}>
                        <img src={imageStepOne} alt="icon"></img>
                        <p> 1- Discover the finest nearby restaurants, cafes and bars, get exclusive discounts and limited time offers.</p>
                    </div>
                    <div className={styles.registrationProcess}>
                        <img src={imageStepTwo} alt="icon"></img>
                        <p> 2- Register to receive all offers, choose local restaurant and receive your unique codes.</p>
                    </div>
                    <div className={styles.registrationProcess}>
                        <img src={imageStepThree} alt="icon"></img>
                        <p> 3- Present your unique code to the venue, then sit back and enjoy your discounted meal!</p>
                    </div>
            </div>
        </section>
    
    )}

export default LandingPage;
