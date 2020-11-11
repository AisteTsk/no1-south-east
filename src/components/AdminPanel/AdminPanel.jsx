import React, { useState, useEffect} from 'react';
import { Link } from '@reach/router'
import styles from './AdminPanel.module.scss';
import 'semantic-ui-css/semantic.min.css'
import { functions } from '../../firebase';
import firebase from "../../firebase";
import { navigate } from "@reach/router";


const AdminPanel = ({user}) => {

    useEffect(() => {
        if (!user || !user.admin){
            navigate("/sign-in");
        }
      }, []);
      
    const [adminEmail, setAdminEmail] = useState('')
    // CREATE
    // add a state that will capture form inputs
    // can update functions to each form input field which updates the respective state field
    // create on sumbit function that takes the state object and creates a new database entry - maybe add a success response panel?
    
    // DELETE
    // load in all restaurant offers to display in deletion panel
    // add a function to the delete button which takes the offer and removes it from the database - maybe add a warning panel?

    const signOut = () => {
        console.log('you  signed out');
    }

    const handleInput = (e) => {
        setAdminEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const addAdminRole = functions.httpsCallable('addAdminRole');
        addAdminRole({email: adminEmail}).then(result => {
            console.log(result);
        });
    }

    if(user && user.admin){
       return( 
        <section className={styles.adminPage}>
        <h1>Admin Panel</h1>
        <div className="adminContainer">
            <form>
                <input type="email" placeholder="User Email" id="adminEmail" onInput={handleInput} required />
                <button>Make Admin</button>
            </form>
        </div>
        <div className={styles.profileBox}>
            <section className={styles.form}>
                <h3>Add an Offer</h3>
                <div className={styles.form_container}>
                <form>
                    <section className = {styles.formInput}>
                    <input type="text" placeholder="Restuarant Name" required />
                    <input type="percentage" placeholder="Offer Percentage" required />
                    <input type="text" placeholder="Offer Description" required />
                    <input type="date" placeholder= "Date Offer Added" required />
                    <input type="date" placeholder= "Date Offer Valid Until" required />
                    <input type="text" placeholder="Restaurant Description" required />
                    <input type="text" placeholder="What type of cuisine does the restaurant serve?" required />
                    <input type="image" placeholder= "insert restuarant image here" required />
                    </section>

                    <section className= {styles.colorWhite}>
                    <p>What's the discount on? </p> 
                    <div class="ui checkbox"><label>Food</label><input type="checkbox" /></div>
                    <div class="ui checkbox"><input type="checkbox" /><label>Drink</label></div>

                    <p>Happy hour?</p>
                    {/* <div class="ui checkbox"><input type="checkbox"><label>True</label></div> */}

                    <p>Which days is the offer available?</p>
                    <div class="ui checkbox" className={styles.checkbox}><input type="checkbox"/><label>Monday</label></div>
                    <div class="ui checkbox"><input type="checkbox"/><label>Tuesday</label></div>
                    <div class="ui checkbox"><input type="checkbox"/><label>Wednesday</label></div>
                    <div class="ui checkbox"><input type="checkbox"/><label>Thursday</label></div>
                    <div class="ui checkbox"><input type="checkbox"/><label>Friday</label></div>
                    <div class="ui checkbox"><input type="checkbox"/><label>Saturday</label></div>
                    <div class="ui checkbox"><input type="checkbox"/><label>Sunday</label></div>
                    </section>
                    {/* <label for="maximumTableSize">Maximum Table Size:</label>
                    <div class="slidecontainer"><p>Default range slider:</p>
                    <input type="range" min="1" max="100" value="50"></input></div> */}
                    

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

                </form>
                </div>
                <button onClick={signOut} className={styles.account_btn}>Sign out</button>
            </section>
        </div>
        <div className={styles.offerContainer}>
            <h3>Delete an Offer</h3>
            <div className={styles.offer}>
                <span className={styles.offerCode}>offer id or restuarant name</span>
                <span className={styles.offerRestaurant}>something about somthin</span>
                <p>maybe some more information</p>
                <button>Delete</button>
            </div>
            <div className={styles.offer}>
                <span className={styles.offerCode}>offer id or restuarant name</span>
                <span className={styles.offerRestaurant}>something about somthin</span>
                <p>maybe some more information</p>
                <button>Delete</button>
            </div>
            <div className={styles.offer}>
                <span className={styles.offerCode}>offer id or restuarant name</span>
                <span className={styles.offerRestaurant}>something about somthin</span>
                <p>maybe some more information</p>
                <button>Delete</button>
            </div>
        </div>
        </section>
    )} else {
        return <p>you're not suppose to be here</p>
    }
}

export default AdminPanel;

