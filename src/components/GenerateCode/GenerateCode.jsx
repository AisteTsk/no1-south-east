import React from 'react';
import styles from './GenerateCode.module.scss';
import { Link } from "@reach/router";

const GenerateCode = ({handleClick}) => {

    // pass user id, (name, number?) down in this component
    // grab restaurant id & name from database
    // create new collection on firestore ("offercodes"?)
    // create new document in offers collection database -> store user id, (name & number?), restaurant id and name
    // in response back from document creation grab the newly created document id (doc.id)
    // display code on page below

    

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={handleClick}>&times;</span>
                <h3>Nice one!</h3>
                <h5>Here's your code...</h5>
                <p className={styles.code}>138915yknefliwrgw98232</p>
                <p>This offer has now been saved to your <Link to="/account" >profile</Link></p>
            </div>
        </div>
    )
}

export default GenerateCode;
