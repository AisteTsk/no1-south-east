import React, { useState } from 'react';
import { Link, navigate } from '@reach/router'
import styles from './SignIn.module.scss'
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase, { provider } from "../../firebase";

const SignIn = (props) => {
    const { user } = props;
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const googleSignIn = (e) => {
        firebase.auth().signInWithRedirect(provider)
        .then(() => {navigate("/browseDeals")});
    }
    
    const signIn = (e) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {navigate("/browseDeals");
        e.preventDefault()})
    }

    //   if (!user) {
    //     navigate("/browseDeals");
    //     e.preventDefault()
    // } else {
    //     alert('You have entered an incorrect email or password, please try again.');
    // }
    
      const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
      };

      const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

    return(
        <>
           <div className={styles.page}>
            <Logo />
            <div className={styles.form}>
                <div className={styles.signin}>
                    <h3>Welcome back!</h3>
                    <form action="">
                        <div className={styles.form_container}>
                            <input type="text" name="email" placeholder="Email Address" onChange={handleEmailChange} required />
                            <input type="text" name="password" placeholder="Password" onChange={handlePasswordChange} required />
                        </div>
                        <button onClick={signIn} className={styles.sign_in_btn}>Sign in</button>
                        <span onClick={googleSignIn} className ={styles.google_sign_in}><FontAwesomeIcon icon={["fab", "googlex"]}/></span>

                    </form>
                    <p className={styles.terms}>
                        <Link to="/terms-and-conditions">Terms and Conditions</Link>
                    </p>                
                    <p>New to the area?
                        <Link to="/register">
                            <button> Create an account</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignIn;