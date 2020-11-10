import React, { useState, useEffect} from 'react';
import { Link } from '@reach/router'
import styles from './AdminPanel.module.scss';
import 'semantic-ui-css/semantic.min.css'


const AdminPanel = () => {

    const signOut = () => {
        console.log('you  signed out');
    }

return (
    <>
    <div className="offerscontainer">
        <div className={styles.offer}>
            <span className={styles.offerCode}>offer id or restuarant name</span>
            <span className={styles.offerRestaurant}>something about somthin</span>
            <p>maybe some more information</p>
            <button>delete</button>
        </div> 
    </div>




    <div className={styles.profileBox}>
        <section className={styles.form}>
            <h3>Add or Remove Restuarants</h3>
            <div className={styles.form_container}>
            <form>
                <input type="text" placeholder="Restuarant Name" required />
                <input type="percentage" placeholder="Offer Percentage" required />
                <input type="text" placeholder="Offer Description" required />
                <input type="date" placeholder= "Date Offer Added" required />
                <input type="date" placeholder= "Date Offer Valid Until" required />
                <input type="text" placeholder="Restaurant Description" required />
                <input type="text" placeholder="What type of cuisine does the restaurant serve?" required />
                <input type="image" placeholder= "insert restuarant image here" required />

                <p>What's the discount on? </p> 
                <div class="ui checkbox"><input type="checkbox" /><label>Food</label></div>
                <div class="ui checkbox"><input type="checkbox" /><label>Drink</label></div>

                <p>Happy hour?</p>
                {/* <div class="ui checkbox"><input type="checkbox"><label>True</label></div> */}

                <p>Which days is the offer available?</p>
                <div class="ui checkbox"><input type="checkbox"/><label>Monday</label></div>
                <div class="ui checkbox"><input type="checkbox"/><label>Tuesday</label></div>
                <div class="ui checkbox"><input type="checkbox"/><label>Wednesday</label></div>
                <div class="ui checkbox"><input type="checkbox"/><label>Thursday</label></div>
                <div class="ui checkbox"><input type="checkbox"/><label>Friday</label></div>
                <div class="ui checkbox"><input type="checkbox"/><label>Saturday</label></div>
                <div class="ui checkbox"><input type="checkbox"/><label>Sunday</label></div>
                   
                <label for="maximumTableSize">Maximum Table Size:</label>
                <input type="range" id="a" value="12" />

                <input type="text" placeholder="Resturant Location" required />
                
                <div class="ui checkbox"><input type="checkbox"/><label>Breakfast</label></div>
                <div class="ui checkbox"><input type="checkbox"/><label>Lunch</label></div>
                <div class="ui checkbox"><input type="checkbox"/><label>Dinner</label></div>


                <input type="text" name="email" placeholder="Email Address" required />
                
                <label for="phone">Enter a phone number:</label><br/><br/>
                <input type="tel" id="phone" name="phone" placeholder="079-0000-0111" required /> 

                <input type="text" placeholder="Instagram handle" required />
                <input type="url" placeholder="Website url" required />
                

                <button type="submit" className={styles.account_btn}>Add New Restaurant</button>
                <button onClick={signOut} className={styles.account_btn}>Sign out</button>
            </form>
            </div>
        </section>
    </div>
    </>
)};
export default AdminPanel;