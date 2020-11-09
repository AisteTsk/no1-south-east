import React from "react";
import styles from "./Terms.module.scss";
import { Link } from '@reach/router';
import footerLogo from "../../assets/images/footerLogo.png"

const Terms = () => {
  return (
    <section className={styles.background}>
      <div className={styles.feedback}>
        <h2>Terms & Conditions</h2>
        <p>No.1 South East is responsible for sharing offers with members. Members must ensure that they read the full offer details to obtain the offer. Details such as days available, times available, number of guests allowed, pre-booking and discounts on selected menus only will need to be noted and No.1 South East are not responsible for restaurants not offering the discount on these basis. No.1 South East are not responsible should a restaurant not offer the discount. Any queries please contact info@no1southeast.co.uk</p>
      </div>
      <p className={styles.faqs}>Feeling inquisitive? Check out our
        <Link to="/faq">FAQ's</Link>
      </p>
      <img src={footerLogo} alt="footer logo"/>
    </section>
  );
};

export default Terms;
