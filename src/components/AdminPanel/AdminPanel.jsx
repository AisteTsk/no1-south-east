import React, { useState, useEffect} from 'react';
import { Link } from '@reach/router'
import styles from './AdminPanel.module.scss';
import 'semantic-ui-css/semantic.min.css'
import { functions } from '../../firebase';
import firebase from "../../firebase";
import { navigate, } from "@reach/router";
import logoImage from "../../assets/images/logocut.png";


const AdminPanel = ({user}) => {

    const [adminEmail, setAdminEmail] = useState('');
    const [newOffer, setNewOffer] = useState({
        restaurantId: 1,
        name: '',
        offerPercent: '',
        offerDescription: '',
        validUntil: '',
        offerAdded: '',
        image: '',
        discount: {food: false, drink: false},
        happyHour: false,
        daysAvailable: [],
        maximumTableSize: 1,
        dietaryRequirements: {vegetarian: false, vegan: false, halal: false, glutenfree: false, dairyfree: false}, 
        location: [0, 0],
        sitting: {breakfast: false, lunch: false, dinner: false},
        cuisine: [],
        email: '',
        phoneNumber: '',
        instagram: '',
        website: '',
        restaurantDescription: '',
        termsAndConditions: ''
    });
    
    useEffect(() => {
        if (!user || !user.admin){
            navigate("/sign-in");
        }
      }, []);
      
    // 
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

    const handleEmail = (e) => {
        setAdminEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const addAdminRole = functions.httpsCallable('addAdminRole');
        addAdminRole({email: adminEmail}).then(result => {
            console.log(result);
        });
    }
    
    const handleStringInput = (e) => {
        const updateNewOffer = {...newOffer};
        updateNewOffer[`${e.target.name}`] = e.target.value;
        setNewOffer(updateNewOffer);
    }

    const handleCheckboxInput = (e) => {
        const updateNewOffer = {...newOffer};
        updateNewOffer[`${e.target.name}`][`${e.target.id}`] = e.target.checked;
        setNewOffer(updateNewOffer);
    }

    const handleArrayInput = (e) => {
        console.log(e.target.value)
        const updateNewOffer = {...newOffer};

        switch (e.target.name){
            case 'cuisine':
                updateNewOffer[`${e.target.name}`] = e.target.value.toLowerCase().split(' ');
                break;
            case 'location':
                if(e.target.id === 'latitude'){
                    updateNewOffer[`${e.target.name}`][0] = e.target.value;
                } else {
                    updateNewOffer[`${e.target.name}`][1] = e.target.value;
                }
                break;
            case 'daysAvailable':
                const dayCheckboxes = document.querySelectorAll('[name = "daysAvailable"]');
                updateNewOffer[]
            default:

        }
    }
    
    
    
    if(user && user.admin){
        return( 
            <section className={styles.adminPage}>
                <div className ={styles.logoLink}>
                    <Link to="/browseDeals">
                    <img src={logoImage} alt="logo img" />
                    </Link>         
                </div>
        <h1>Admin Panel</h1>
        <div className="adminContainer">
            <form>
                <input type="email" placeholder="User Email" id="adminEmail" onInput={handleEmail} required />
                <button>Make Admin</button>
            </form>
        </div>
        <div className={styles.profileBox}>
            <section className={styles.form}>
                
                <div className={styles.form_container}>
                <form>
                    <section className = {styles.formInput}>
                    <h3>Add an Offer</h3>
                    <input type="text" placeholder="Restuarant Name" name="name" onInput={handleStringInput} required />
                    <textarea placeholder="Offer Description" name="offerDescription" onInput={handleStringInput} required />
                    <textarea placeholder="Restaurant Description" name="restaurantDescription" onInput={handleStringInput} required />
                    <input type="text" placeholder="What type of cuisine does the restaurant serve? (please use lowercase and seperate cuisines with single space)" name="cuisine" required />
                    <input type="text" placeholder= "Insert restaurant image url here" name="image" onInput={handleStringInput} required />
                    </section>

                    
                    {/* <label for="maximumTableSize">Maximum Table Size:</label>
                    <div class="slidecontainer"><p>Default range slider:</p>
                <input type="range" min="1" max="100" value="50"></input></div> */}
                    
                    <span>
                    <input type="number" placeholder="Restaurant Latitude" name= "location" id="latitude" required />
                    <input type="number" placeholder="Restaurant Longitude" name= "location" id="longitude" required />
                    </span>

                    <input type="text" name="email" placeholder="Email Address" onInput={handleStringInput} required />
                    <div className={styles.checkboxColumn}>
                    <div className={styles.food}>
                    <p>What's the discount on? </p> 
                    <div className="li checkbox"><input type="checkbox" name="discount" id="food" onInput={handleCheckboxInput} /><label>Food</label></div>
                    <div className="li checkbox"><input type="checkbox" name="discount" id="drink" onInput={handleCheckboxInput}/><label>Drink</label></div>
                    </div>

                    <div className={styles.days}>
                    <p>Which days is the offer available?</p>
                    <div className="li checkbox"><input type="checkbox" name= "daysAvailable" value="monday"/><label>Monday</label></div>
                    <div className="li checkbox"><input type="checkbox" name= "daysAvailable" value="tuesday"/><label>Tuesday</label></div>
                    <div className="li checkbox"><input type="checkbox" name= "daysAvailable" value="wednesday"/><label>Wednesday</label></div>
                    <div className="li checkbox"><input type="checkbox" name= "daysAvailable" value="thursday"/><label>Thursday</label></div>
                    <div className="li checkbox"><input type="checkbox" name= "daysAvailable" value="friday"/><label>Friday</label></div>
                    <div className="li checkbox"><input type="checkbox" name= "daysAvailable" value="saturday"/><label>Saturday</label></div>
                    <div className="li checkbox"><input type="checkbox" name= "daysAvailable" value="sunday"/><label>Sunday</label></div>
                    </div>
                    <div className={styles.breakfast}>
                    <p>When is the offer available?</p>
                    <div className="li checkbox"><input type="checkbox" name="sitting" id="breakfast" onInput={handleCheckboxInput}/><label>Breakfast</label></div>
                    <div className="li checkbox"><input type="checkbox" name="sitting" id="lunch" onInput={handleCheckboxInput}/><label>Lunch</label></div>
                    <div className="li checkbox"><input type="checkbox" name="sitting" id="dinner" /><label>Dinner</label></div>
                    </div>
                    </div>
                    
                    

                    <input type="percentage" placeholder="Offer Percentage" name="offerPercent" onInput={handleStringInput} required />
                    <input type="date" placeholder= "Date Offer Added" name="offerAdded" required />
                    <input type="date" placeholder= "Date Offer Valid Until" name="validUntil" required />
                    
                    <input type="tel" placeholder="Phone Number" name="phoneNumber" required /> 
                    


                    <input type="Instagram" placeholder="Instagram handle" name="instagram" onInput={handleStringInput} required />
                    <input type="url" placeholder="Website url" name="website" onInput={handleStringInput} required />
                    


                    <button type="submit" className={styles.account_btn} onClick={handleSubmit}>Add New Restaurant</button>

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

