import React from 'react';
import { Link } from '@reach/router'
import styles from './Register.module.scss'
import Logo from "../Logo/Logo";

const Register = () => {
    return(
        <div className={styles.page}>
            <Logo />
            <div className={styles.form}>
                <div className={styles.register}>
                    <h3>Register to redeem great offers!</h3>
                    <form action="">
                        <div className={styles.form_container}>
                            <input type="text" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                        </div>
                        <div className={styles.form_container}>
                            <input id="email" type="text" name="email" placeholder="Email Address" required />
                            <input id="password" type="text" name="password" placeholder="Password" required />
                        </div>
                        <p>By signing up you agree to our
                            <p className={styles.terms}>
                                <Link to="/terms-and-conditions">Terms and Conditions</Link>
                            </p> 
                        </p>
                        <button type="submit" className={styles.register_btn}>Register</button>
                    </form>
                    <p>Already have an account? 
                        <Link to="/sign-in">
                            <button>Sign in</button>
                        </Link>
                    </p>
                    <p className={styles.faqs}>Feeling inquisitive? Check out our
                        <Link to="/faq">FAQ's</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

// useEffect ( () => {
//     const individualUser = userData.forEach( (user) => {
//       firestore
//       .collection('users')
//       .doc(user.uid)
//       .set({...user})
//       .then( () => {
//         console.log('succesfully uploaded')
//       })
//       .catch( (err) =>{
//         console.log(err)
//       })
//     })
//   }, [])