import React from 'react';
import { Link } from '@reach/router'
import styles from './Register.module.scss'
import Logo from "../../assets/images/Homepagelogo.png"

const Register = () => {

    return(
        <div className={styles.page}>
            <div className={styles.logoContainer}>
                <img src={Logo} />
            </div>
            <div className={styles.form}>
                <div className={styles.register}>
                    <h3>Register to redeem great offers!</h3>
                    <form action="">
                        <div className={styles.form_container}>
                            <input type="text" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                        </div>
                        <div className={styles.form_container}>
                            <input type="text" name="email" placeholder="Email Address" required />
                            <input type="text" name="password" placeholder="Password" required />
                        </div>
                        <p>By signing up you agree to our
                            <p className={styles.terms}>
                                <Link to="terms-and-conditions">Terms and Conditions</Link>
                            </p> 
                        </p>
                        <button type="submit" className={styles.register_btn}>Register</button>
                    </form>
                    <p>Already have an account? 
                        <Link to="/sign-in">
                            <button>Sign in</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;