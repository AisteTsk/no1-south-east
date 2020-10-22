import React from 'react';
import { Link } from '@reach/router'
import styles from './SignUp.module.scss'

const SignUp = () => {

    // function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        // var profile = googleUser.getBasicProfile();
        // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        // console.log('Full Name: ' + profile.getName());
        // console.log('Given Name: ' + profile.getGivenName());
        // console.log('Family Name: ' + profile.getFamilyName());
        // console.log("Image URL: " + profile.getImageUrl());
        // console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        // var id_token = googleUser.getAuthResponse().id_token;
        // console.log("ID Token: " + id_token);
    //   }
    return(
        <div className={styles.page}>
            <div className={styles.sign_up_form}>
                <h3>Sign up to redeem your offer!</h3>
                <form action="">
                    <div className={styles.form_container}>
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <input type="text" name="email" placeholder="Email Address" required />
                    {/* <p>Google API=</p> */}
                    <p>By signing up you agree to our
                        <Link to="TermsAndConditions">
                            <span className={styles.terms}> Terms and Conditions.</span>                
                        </Link>
                    </p>
                    <button type="submit" className={styles.sign_up_btn}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}


export default SignUp