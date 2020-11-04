import React, { useState, useEffect} from "react";
import Routes from "./containers/Routes";
import firebase, { provider } from "./firebase";
import "./data/fa-library";


const App = () => {
  const [user, setUser] = useState(null);

  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    });
  };

  useEffect(() => {
    getUser();
  });


  return (
    <>
      <div>
        <Routes 
          user={user}
          signIn={signIn}
          signOut={signOut}
        />
      </div>
    </>
  )
};

export default App;
