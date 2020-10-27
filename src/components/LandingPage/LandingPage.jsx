import React from "react";
import styles from "./LandingPage.module.scss";
import imageStepOne from '../../assets/images/imagestep1.png';
import imageStepTwo from '../../assets/images/imagestep2.png';
import imageStepThree from '../../assets/images/imagestep3.png';
import logoCutlery from "../../assets/images/logoCutlery.png";
import imagePin from '../../assets/images/pin-white.png';
import { Link } from "@reach/router";


const LandingPage = () => {
    return(
        <section className={styles.landingPage}>
            <div className={styles.grid}>
                <div className={styles.topLeft}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.bottomLeft}></div>
                <div className={styles.middle}>
                    <p>No.1 South West</p>
                </div>
                <div className={styles.topRight}>
                    <div className={styles.semiCircle}></div>
                </div>
                <div className={styles.bottomRight}>
                    <div className={styles.buttons}>
                        <Link to="SignUp">
                            <button className={styles.LandingPageButton}>Sign In ></button>
                        </Link>
                        <Link to="browseDeals">
                            <button className={styles.LandingPageButton}>View Offers ></button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage;
