import React, { useState, useEffect} from "react";
import Routes from "./containers/Routes";
import firebase from "./firebase";
import faLibrary from "./data/fa-library";

const App = () => {
  const [user, setUser] = useState(null);

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
          signOut={signOut}
        />
      </div>
    </>
  )
};
export default App;
