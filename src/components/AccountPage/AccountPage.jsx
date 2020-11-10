import React, { useState, useEffect} from 'react';
import { Link } from '@reach/router'
import styles from './AccountPage.module.scss'
import Logo from "../Logo/Logo";
import favourites from '../../data/restaurants'
import CardList from "../CardList";
import FeedbackPanel from '../filterFunctionality/FeedbackPanel';
import { firestore } from '../../firebase';
import moment from 'moment';


const AccountPage = ({ signOut, user }) => {


        // we have used a placeholder for the FAVs, Saved and redeemed
        // save offer code in saved offers on profile page.
        // on profile page check the db for any offers that contain the user uid and return.
        const [offerCodes, setOfferCodes] = useState([]);
        
    useEffect(() => {
        if(user !== null){
            firestore
        .collection("offerCodes")
        .get()
        .then((querySnapshot) => {
            const allOffers = []
            querySnapshot.forEach((doc) => {
                const offers = {...doc.data(), codeid: doc.id};
                allOffers.push(offers)
            });
            
            setOfferCodes(allOffers.filter(code => code.userid === user.uid).sort((offerA, offerB) => offerB.createdAt.seconds - offerA.createdAt.seconds));
            
        }).catch((err) => console.log(err));
        }
    }, [user])

    const offerJsx = offerCodes.length ? (
        offerCodes.map(offer => {
            return(
                <div className={styles.offer}>
                    <span className={styles.offerCode}>{offer.codeid}</span>
                    <span className={styles.offerRestaurant}>{offer.restaurantName}</span>
                    <p>{moment(offer.createdAt.toDate()).calendar()}</p>
                </div> 
            )
        })               
    ) : 
    <p>You have no redeemed offers</p>


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
                <section className={styles.offerForm}>
                        {offerJsx} 
                </section>
            </div>

            <div className={styles.page}>
                <a name="referFriend"></a>
                <h2 className={styles.boxtitle}>Refer a Friend</h2>
                <section className={styles.form}>
                <div className={styles.refer}>
                    <button className={styles.update_btn}>Click for a referral code:</button>
                    <p></p>
                    </div>
                </section>

            </div>
        </div>
    )
};

export default AccountPage;