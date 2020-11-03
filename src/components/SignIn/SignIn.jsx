import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router'
import styles from './SignIn.module.scss'
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase, { provider } from "../../firebase";

const SignIn = (props) => {
    const { user, googleSignIn, signIn } = props;
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        console.log(user)
        if (user) navigate("/browseDeals");
    },[]);

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

    return(
        <>
           <div className={styles.page}>
            <Logo />
            <div className={styles.form}>
                <div className={styles.signin}>
                    <h3>Welcome back!</h3>
                    <form action="" onSubmit={handleSignInClick}>
                        <div className={styles.form_container}>
                            <input type="text" name="email" placeholder="Email Address" onChange={handleEmailChange} required />
                            <input type="text" name="password" placeholder="Password" onChange={handlePasswordChange} required />
                        </div>
                        <button type="submit" className={styles.sign_in_btn}>Sign in</button>
                        <span onClick={handleGoogleSignInClick} className ={styles.google_sign_in}><FontAwesomeIcon icon={["fab", "google"]}/></span>

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