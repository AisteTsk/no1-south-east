import React from "react";
import Routes from "./containers/Routes";
import firebase from "./firebase";



const App = () => {
  const [user, setUser] = useState (null);

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

      });
  };


  return (
    <>
      <div>
        <Routes/>
      </div>
    </>
  )
};
export default App;
