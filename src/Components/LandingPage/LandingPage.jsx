import React from "react";
import styles from "../../sass/main.module.scss";

const LandingPage = () => {
    return(
        <section className={styles.landingPage}>
            <div className={styles.grid}>
                <div className={styles.topLeft}>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.bottomLeft}></div>
                <div className={styles.middle}>
                    <p>No.1 South East</p>
                </div>
                <div className={styles.topRight}>
                    <div className={styles.semiCircle}></div>
                </div>
                <div className={styles.bottomRight}>
                    <div className={styles.buttons}>
                        <button className={styles.LandingPageButton}>Sign In ></button>
                        <button className={styles.LandingPageButton}>View Restaurant Offers ></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage;
