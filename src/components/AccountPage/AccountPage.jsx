import React from 'react';
import { Link } from '@reach/router'
import styles from './AccountPage.module.scss'
import Logo from "../Logo/Logo";


const AccountPage = (props) => {
    const { signOut } = props;

    return (
        <div>
            <div className={styles.page}>
            <a name="profile"></a>
                <Logo />
                <section className={styles.form}>
                    <div className={styles.updateDetails}>
                        <h3>Update your info</h3>
                        <form action="">
                            <div className={styles.form_container}>
                                <input type="text" placeholder="First Name" required />
                                <input type="text" placeholder="Last Name" required />
                            </div>
                            <div className={styles.form_container}>
                                <input type="text" name="email" placeholder="Email Address" required />
                                <input type="text" name="password" placeholder="Password" required />
                            </div>
                            <button type="submit" className={styles.account_btn}>Update Details</button>
                            <button onClick={signOut} className={styles.account_btn}>Sign out</button>
                        </form>
                    </div>
                </section>
                <div className={styles.bottomRight}>
                            <div className={styles.buttons}>
                            <a href="#profile">
                                    <button className={styles.LandingPageButton}>Profile ></button>
                                </a>

                                <a href="#favourites">
                                    <button className={styles.LandingPageButton}>Favourites ></button>
                                </a>

                                <a href="#recentlyViewed">
                                    <button className={styles.LandingPageButton}>Recently Viewed></button>
                                </a>
                                <a href="#redeemed">
                                    <button className={styles.LandingPageButton}>Redeemed Offers></button>
                                </a>
                                <a href="#referFriend">
                                    <button className={styles.LandingPageButton}> Refer a Friend ></button>
                                </a>
                            </div>
                        </div>
            </div>

            <div className={styles.page}>
                <a name="favourites"></a>
                <section className={styles.form}>
                    <section className={styles.favourites}>
                        <p>View Favourites
                    </p>
                    </section>
                </section>
            </div>

            <div className={styles.page}>
                <a name="recentlyViewed"></a>
                <section className={styles.form}>
                    <p> Recently Viewed Offers
                    </p>
                </section>
            </div>

            <div className={styles.page}>
                <a name="redeemed"></a>
                <section className={styles.form}>
                    <p>Redeemed Offers
                    </p>
                </section>
            </div>

            <div className={styles.page}>
                <a name="referFriend"></a>
                <section className={styles.form}>
                    <p>Refer a friend
                    </p>
                    <p className={styles.faqs}>
                        Code:
                    </p>
                </section>
            </div>
        </div>
    )
};

export default AccountPage;