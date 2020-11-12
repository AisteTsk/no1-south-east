import React, { useState, useEffect} from 'react';
import { Link } from '@reach/router'
import styles from './AdminPanel.module.scss';
import 'semantic-ui-css/semantic.min.css'
import { functions } from '../../firebase';
import firebase, { firestore } from "../../firebase";
import { navigate, } from "@reach/router";
import logoImage from "../../assets/images/logocut.png";


const AdminPanel = ({user}) => {

    const [adminEmail, setAdminEmail] = useState('');
    const [newOffer, setNewOffer] = useState({
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
    console.log(newOffer)

    useEffect(() => {
        if (!user || !user.admin){
            navigate("/sign-in");
        }

        
      }, []);
      
    
    // CREATE
    // add a state that will capture form inputs
    // can update functions to each form input field which updates the respective state field
    // create on sumbit function that takes the state object and creates a new database entry - maybe add a success response panel?
    
    // const formSubmit = (e) => {
    //     e.preventDefault();

        //     const addRestaurant = () => {
        //     firestore
        //         .collection("restaurants")
        //         .doc(restaurant.id)
        //         .set({...restaurant})
        //     };
    //     });
    // }


    // DELETE
    // load in all restaurant offers to display in deletion panel
    // add a function to the delete button which takes the offer and removes it from the database - maybe add a warning panel?
    
    // const removeRestaurant = () => {
    //     firestore
    //       .collection("restaurants")
    //       .doc(restaurant.id)
    //       .delete()
    //       .catch((err) => console.log(err));
    // };

    
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

        // catch offer percentage for formatting
        if(e.target.name === 'offerPercent' && !e.target.value.includes('%')){
            updateNewOffer[`${e.target.name}`] = `${e.target.value}%`;
        }

        setNewOffer(updateNewOffer);
    }

    const handleCheckboxInput = (e) => {
        const updateNewOffer = {...newOffer};
        updateNewOffer[`${e.target.name}`][`${e.target.id}`] = e.target.checked;
        setNewOffer(updateNewOffer);
    }

    const handleDateInput = (e) => {
        console.log(e.target.value)
        const updateNewOffer = {...newOffer};
        updateNewOffer[`${e.target.name}`] = e.target.value;
        setNewOffer(updateNewOffer);
    }

    const handleArrayInput = (e) => {
        const updateNewOffer = {...newOffer};

        switch (e.target.name){
            case 'cuisine':
                updateNewOffer[`${e.target.name}`] = e.target.value.toLowerCase().replace(/,/g, '').split(' ');
                break;
            case 'location':
                if(e.target.id === 'latitude'){
                    updateNewOffer[`${e.target.name}`][0] = parseFloat(e.target.value);
                } else {
                    updateNewOffer[`${e.target.name}`][1] = parseFloat(e.target.value);
                }
                break;
            case 'daysAvailable':
                    updateNewOffer[`${e.target.name}`] = e.target.value.toLowerCase().replace(/,/g, '').split(' ');
                break;
            default:
                console.log('no value set');
        }
        setNewOffer(updateNewOffer);
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
                    <input type="text" placeholder="What type of cuisine does the restaurant serve? (please use lowercase and seperate cuisines with single space)" name="cuisine" onInput={handleArrayInput} required />
                    <input type="text" placeholder= "Insert restaurant image url here" name="image" onInput={handleStringInput} required />
                    </section>

                    <div className={styles.days}>
                    <p>Which days is the offer available?</p>
                    <div className="?">
                        <input type="text" name="daysAvailable" placeholder="Insert the days of the week the offer is available e.g. monday wednesday sunday" onInput={handleArrayInput}/></div>
                    </div>
                    
                    {/* <label for="maximumTableSize">Maximum Table Size:</label>
                    <div class="slidecontainer"><p>Default range slider:</p>
                <input type="range" min="1" max="100" value="50"></input></div> */}
                    
                    <span>
                    <input type="number" placeholder="Restaurant Latitude" name= "location" id="latitude" onInput={handleArrayInput} required />
                    <input type="number" placeholder="Restaurant Longitude" name= "location" id="longitude" onInput={handleArrayInput} required />
                    </span>

                    <input type="email" name="email" placeholder="Email Address" onInput={handleStringInput} required />
                    <div className={styles.checkboxColumn}>
                    <div className={styles.food}>
                    <p>What's the discount on? </p> 
                    <div className="li checkbox"><input type="checkbox" name="discount" id="food" onInput={handleCheckboxInput} /><label>Food</label></div>
                    <div className="li checkbox"><input type="checkbox" name="discount" id="drink" onInput={handleCheckboxInput}/><label>Drink</label></div>
                    </div>

                    <div className={styles.breakfast}>
                    <p>When is the offer available?</p>
                    <div className="li checkbox"><input type="checkbox" name="sitting" id="breakfast" onInput={handleCheckboxInput}/><label>Breakfast</label></div>
                    <div className="li checkbox"><input type="checkbox" name="sitting" id="lunch" onInput={handleCheckboxInput}/><label>Lunch</label></div>
                    <div className="li checkbox"><input type="checkbox" name="sitting" id="dinner" onInput={handleCheckboxInput}/><label>Dinner</label></div>
                    </div>

                    <div className={styles.diet}>
                    <p>Which dietary requirements are catered for?</p>
                    <div className="li checkbox"><input type="checkbox" name= "dietaryRequirements" value="vegetarian" onInput={handleCheckboxInput}/><label>Vegetarian</label></div>
                    <div className="li checkbox"><input type="checkbox" name= "dietaryRequirements" value="vegan" onInput={handleCheckboxInput}/><label>Vegan</label></div>
                    <div className="li checkbox"><input type="checkbox" name= "dietaryRequirements" value="halal" onInput={handleCheckboxInput}/><label>Halal</label></div>
                    <div className="li checkbox"><input type="checkbox" name= "dietaryRequirements" value="glutenfree" onInput={handleCheckboxInput}/><label>Gluten-Free</label></div>
                    <div className="li checkbox"><input type="checkbox" name= "dietaryRequirements" value="dairyfree" onInput={handleCheckboxInput}/><label>Dairy-Free</label></div>
                    </div>
                    </div>  
                    <div className={styles.grid}>
                    <div className={styles.offerPercentage}>
                    <input type="number" placeholder="Offer Percentage" name="offerPercent" onInput={handleStringInput} required />
                    </div>
                     <div className={styles.phoneNumber}>
                    <input type="tel" placeholder="Phone Number" name="phoneNumber" onInput={handleStringInput} required /> 
                    </div>
                    <div className={styles.validUntil}>
                    <label>Date Offer Valid Until</label><input type="date" placeholder= "Date Offer Valid Until" name="validUntil" onInput= {handleDateInput} required />
                    </div>
                    <div className={styles.instagram}>
                    <input type="url" placeholder="Instagram handle" name="instagram" onInput={handleStringInput} required />
                    </div>
                    <div className={styles.website}>
                    <input type="url" placeholder="Website url" name="website" onInput={handleStringInput} required />
                    </div>
                    </div>

                    <div className={styles.buttonRow}>
                    <button type="submit" className={styles.account_btn} onClick={handleSubmit}>Add New Restaurant</button>
                    <button onClick={signOut} className={styles.account_btn}>Sign out</button>
                    </div>
                </form>
                </div>
            </section>
        </div>
        <div className={styles.offerContainer}>
            <h3>Delete an Offer</h3>
            <div className={styles.offer}>
                <span className={styles.offerCode}>Offer ID/</span>
                <span className={styles.offerRestaurant}>Restaurant Name</span>
                <p>Further information about offer.</p>
                <button>Delete</button>
            </div>
            <div className={styles.offer}>
                <span className={styles.offerCode}>Offer ID/</span>
                <span className={styles.offerRestaurant}>Restaurant Name</span>
                <p>Further information about offer.</p>
                <button>Delete</button>
            </div>
            <div className={styles.offer}>
                <span className={styles.offerCode}>Offer ID/</span>
                <span className={styles.offerRestaurant}>Restaurant Name</span>
                <p>Further information about offer.</p>
                <button>Delete</button>
            </div>
        </div>
        </section>
    )} else {
        return <p>you're not suppose to be here</p>
    }
}

export default AdminPanel;

