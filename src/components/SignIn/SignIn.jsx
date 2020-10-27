import React from 'react';
import { Link } from '@reach/router'
import styles from './SignIn.module.scss'

const SignIn = () => {

    return(
        <div className={styles.signin}>
            <h3>Welcome back!</h3>
            <form action="">
                <div className={styles.form_container}>
                    <input type="text" name="email" placeholder="Email Address" required />
                    <input type="text" name="password" placeholder="Password" required />
                </div>
                {/* <p>Google API=</p> */}
                <button type="submit" className={styles.sign_in_btn}>Sign in</button>
            </form>
            <Link className={styles.terms} to="terms-and-conditions">
                <p>Terms and Conditions</p>                
            </Link>
            <p>New to the area? <button>Create an account</button></p>
        </div>
    );
};

export default SignIn;