import React from 'react';
import { Link } from '@reach/router'
import styles from './SignIn.module.scss'
import Logo from "../Logo/Logo";

const SignIn = () => {
    return(
        <div className={styles.page}>
            <Logo />
            <div className={styles.form}>
                <div className={styles.signin}>
                    <h3>Welcome back!</h3>
                    <form action="">
                        <div className={styles.form_container}>
                            <input type="text" name="email" placeholder="Email Address" required />
                            <input type="text" name="password" placeholder="Password" required />
                        </div>
                        <button type="submit" className={styles.sign_in_btn}>Sign in</button>
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
    );
};

export default SignIn;