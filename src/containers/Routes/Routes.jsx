import React from "react";
import { Router } from "@reach/router";
import DealsPage from "../DealsPage/DealsPage";
import NotFound from "../NotFound";
import Dashboard from "../Dashboard";
import SignIn from '../../components/SignIn';
import Register from '../../components/Register';
import RestaurantDetails from '../../components/RestaurantDetails';
import FaQs from "../FaQs/FaQs";
import Terms from "../Terms/Terms";
import Logo from "../../components/Logo";
import AccountPage from "../../components/AccountPage";
import RedeemOfferPage from "../../components/RedeemOfferPage";
import PrivateRoutes from "../PrivateRoutes";

const Routes = (props) => {
  const { user, googleSignIn, signIn, signOut } = props;

  return (
    <Router>
      <Dashboard path="/" />
      <Logo path="/" />
      <NotFound path="/404" />
      <FaQs path="/faq" />
      <Terms path="/terms-and-conditions" />
      <DealsPage path="/browseDeals" />
      <SignIn path="/sign-in" googleSignIn={googleSignIn} signIn={signIn} signOut={signOut} user={user} /> 
      <Register path="/register" />
      <RestaurantDetails path="/restaurants/:databaseId"/>


      <PrivateRoutes path="/" user={user} > 
        <AccountPage path="/account" signOut={signOut} />
        <RedeemOfferPage path="/redeem-offer" />
      </PrivateRoutes>
    </Router>
  );
};

export default Routes;