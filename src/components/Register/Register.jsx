import React from 'react';
import { Link } from '@reach/router'
import styles from './Register.module.scss'

const Register = () => {

    return(
        <div className={styles.register}>
            <h3>Sign up to redeem great offers!</h3>
            <form action="">
                <div className={styles.form_container}>
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                </div>
                <div className={styles.form_container}>
                <input type="text" name="email" placeholder="Email Address" required />
                <input type="text" name="password" placeholder="Password" required />
                </div>
                {/* <p>Google API=</p> */}
                <p>By signing up you agree to our
                    <Link to="terms-and-conditions">
                        <span className={styles.terms}> Terms and Conditions.</span>                
                    </Link>
                </p>
                <button type="submit" className={styles.sign_up_btn}>Register</button>
            </form>
            <p>Already have an account? <button>Sign in</button></p>
        </div>
    );
};

export default Register;