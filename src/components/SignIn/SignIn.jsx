import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router'
import styles from './SignIn.module.scss'
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import firebase, { provider } from "../../firebase";

const SignIn = (props) => {
    const { user, googleSignIn, signIn, signOut } = props;
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect((user) => {
        console.log(user)
        if (user) navigate("/browseDeals");
    }, []);

    const handleEmailChange = (e) => {
        const email = e.target.value;
        console.log(email)
        setEmail(email);
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        console.log(password)
        setPassword(password);
    };

    const handleSignInClick = (e) => {
        e.preventDefault();
        console.log(email, password);
        signIn(email, password);
    }

    const handleGoogleSignInClick = (e) => {
        e.preventDefault();
        googleSignIn();
    }

    const checkSignIn = () => {
        if (user === null) {
            return (
                <div className={styles.signin}>
                    <h3>Welcome back!</h3>
                    <form action="" onSubmit={handleSignInClick}>
                        <div className={styles.form_container}>
                            <input type="text" name="email" placeholder="Email Address" onChange={handleEmailChange} required />
                            <input type="password" name="password" placeholder="Password" onChange={handlePasswordChange} required />
                        </div>
                        <button type="submit" className={styles.sign_in_btn}>Sign in</button>
                        <div className ={styles.google_sign_in} onClick={handleGoogleSignInClick}>
                            <p>Sign in with <span><FontAwesomeIcon icon={["fab", "google"]}/></span>oogle</p>
                        </div>
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
            )   
        } else {
            return (
                <div className={styles.signedInMessage}>
                    <h3>You are already signed in</h3>
                    <Link to="/browseDeals">
                        <button>Continue as {user.email}</button>
                    </Link>
                    <button onClick={signOut}>Sign Out</button>
                </div>    
            )   
        }
    }

    return(
        <div className={styles.page}>
            <Logo />
            <div className={styles.form}>
                {checkSignIn()}
            </div>
        </div>
    );
};

export default SignIn;