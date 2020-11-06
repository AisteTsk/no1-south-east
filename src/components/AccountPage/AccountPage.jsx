import React from 'react';
import styles from './AccountPage.module.scss'
import Logo from "../Logo/Logo";
import favourites from '../../data/restaurants'
import CardList from "../CardList";
import FeedbackPanel from '../filterFunctionality/FeedbackPanel';


const AccountPage = (props) => {

    const { signOut } = props;

    // we have used a placeholder for the FAVs, Saved and redeemed

    const contentJsx = favourites.length ? (
        <CardList restaurants={favourites} />
    ) : (
            <FeedbackPanel
                header="No matches"
            />
        )
    return (
        <div>
            <a name="profile"></a>
            <div className={styles.page}>
                <Logo />
                <div className={styles.profileBox}>
                    <section className={styles.form}>
                        <h3>Update your info</h3>
                        <form action="">
                            <div className={styles.form_container}>
                                <input type="text" placeholder="First Name" required />
                                <input type="text" placeholder="Last Name" required />
                            </div>
                            <div className={styles.form_container}>
                                <input type="text" name="email" placeholder="Email Address" required />
                                <input type="text" name="password" placeholder="Password" required />
                                <input type="text" name="confirmpassword" placeholder="Confirm Password" required />
                            </div>
                            <button type="submit" className={styles.account_btn}>Update</button>
                            <button onClick={signOut} className={styles.account_btn}>Sign out</button>
                        </form>
                    </section>
                </div>

                <div className={styles.navButtons}>
                    <div className={styles.buttons}>
                        <a href="#profile">
                            <button className={styles.navButton}>Profile</button>
                        </a>

                        <a href="#favourites">
                            <button className={styles.navButton}>Favourites</button>
                        </a>

                        <a href="#recentlyViewed">
                            <button className={styles.navButton}>Recently Viewed</button>
                        </a>
                        <a href="#redeemed">
                            <button className={styles.navButton}>Redeemed Offers</button>
                        </a>
                        <a href="#referFriend">
                            <button className={styles.navButton}> Refer a Friend</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.page}>
                <a name="favourites"></a>
                <h2 className={styles.boxtitle}>Favourites</h2>
                <section className={styles.form}>
                    {contentJsx}
                </section>
            </div>

            <div className={styles.page}>
                <a name="recentlyViewed"></a>
                <h2 className={styles.boxtitle}> Recently Viewed</h2>
                <section className={styles.form}>
                    {contentJsx}
                </section>
            </div>

            <div className={styles.page}>
                <a name="redeemed"></a>
                <h2 className={styles.boxtitle}> Redeemed Offers</h2>
                <section className={styles.form}>
                    {contentJsx}
                </section>
            </div>

            <div className={styles.page}>
                <a name="referFriend"></a>
                <h2 className={styles.boxtitle}>Refer a Friend</h2>
                <section className={styles.form}>
                    <div className={styles.refer}>
                        <button className={styles.account_btn}>Click for a referral code:</button>
                    </div>
                </section>

            </div>
        </div>
    )
};

export default AccountPage;