import React from 'react';
import styles from './Login.module.scss';
import SignIn from "../../components/SignIn/SignIn";
import Register from "../../components/Register/Register";

const Login = () => {

    return(
        <div className={styles.page}>
            {/* <div className={styles.form}>
                <SignIn />
            </div> */}
            <div className={styles.form}>
                <Register />
            </div>
        </div>
    )
}

export default Login;

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