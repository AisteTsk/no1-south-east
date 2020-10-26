import React from 'react';
import { Link } from '@reach/router'
import styles from './SignIn.module.scss'

const SignIn = () => {

    return(
        <div className={styles.signin}>
            <h3>Sign in!</h3>
            <form action="">
                <div className={styles.form_container}>
                    <input type="text" name="email" placeholder="Email Address" required />
                </div>
                <input type="text" name="password" placeholder="Password" required />
                {/* <p>Google API=</p> */}
                <p>
                    <Link to="terms-and-conditions">
                        <span className={styles.terms}> Terms and Conditions.</span>                
                    </Link>
                </p>
                <button type="submit" className={styles.sign_in_btn}>Sign In</button>
            </form>
            <p>New to the area? <button>Create an account</button></p>
        </div>
    );
};

export default SignIn;