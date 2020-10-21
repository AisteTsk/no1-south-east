import React from 'react';
import { Link } from '@reach/router'
import styles from './SignUp.module.scss'

const SignUp = () => {

    return(
        <>
            <div className={styles.sign_up_form}>
                <h3 className={styles.signuptitle}>Sign up to redeem your offer!</h3>
                <form action="">
                    <input type="text" placeholder="Enter your name" className={styles.name} required />
                    <input type="text" placeholder="Enter your last name" className={styles.last_name} required />
                    <input type="text" name="email" placeholder="Enter your email" className={styles.email} required />
                    <p>Google API</p>
                    <p>By signing up you agree to our
                        <Link to="TermsAndConditions">
                            <span className={styles.terms}> Terms and Conditions.</span>                
                        </Link>
                    </p>
                    <button type="submit" className={styles.sign_up_btn}>Sign Up</button>
                </form>
            </div>
        </>
    )
}


export default SignUp