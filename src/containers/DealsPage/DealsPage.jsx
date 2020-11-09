import React, { useState, useEffect } from 'react';
import styles from './DealsPage.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleApiWrapper } from 'google-maps-react';
import googleMapsApiKey from '../../data/googleMapsConfig';
import { firestore } from '../../firebase';

import logoImage from '../../assets/images/logocut.png';


// components
import CardList from "../../components/CardList";
import FilterButton from '../../components/filterFunctionality/FilterButton';
import SearchBar from '../../components/filterFunctionality/SearchBar';
import FeedbackPanel from '../../components/filterFunctionality/FeedbackPanel';
// import Location from '../../components/filterFunctionality/Location';
import { Link } from "@reach/router";


const DealsPage = ({ google }) => {

  //*****importing data from firestore*****//
  let restaurants = [];

  const fetchRestaurants = () => {
    firestore
      .collection("deals")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const retaurantData = doc.data();
          restaurants.push({ ...retaurantData, databaseId: doc.id })
        })

        //format offAdded to time since last epoch (use getTime()) property in rastaurants array
        const restaurantsEpochTime = restaurants.map((restaurant) => {
          restaurant.offerAdded = new Date(restaurant.offerAdded).getTime();
          return restaurant;
        });

        const latestRestaurants = restaurantsEpochTime.sort((restaurantA, restaurantB) => restaurantA.offerAdded - restaurantB.offerAdded);
        
        setAllRestaurants(latestRestaurants);
        setFilteredList(latestRestaurants);
      }).catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRestaurants()
  }, [])

  // set up states
  // filtered list = search or filter functions, user location = user tracking location, distance sorted list = filtered list if tracking is active.
  const [allRestaurants, setAllRestaurants]  = useState();
  const [filteredList, setFilteredList] = useState();
  const [userLocation, setUserLocation] = useState("");
  const [distanceSortedList, setDistanceSortedList] = useState([]);
  

    // function cycles over all filter properties and filters the restaurants array using only matching values
  const filterRestaurants = (filterParameters) => {

    // just incase it hasn't been reset
    let filteredRestaurants = allRestaurants;

    const filterParameterKeys = Object.keys(filterParameters);

    filterParameterKeys.forEach(parameterKey => {

      if (typeof filterParameters[`${parameterKey}`] === 'object') {
        const subParameterKeys = Object.keys(filterParameters[`${parameterKey}`]);

        subParameterKeys.forEach(subParameter => {

          if (filterParameters[`${parameterKey}`][`${subParameter}`]) {
            filteredRestaurants = filteredRestaurants.filter(restaurant => {
              return restaurant[`${parameterKey}`][`${subParameter}`] === filterParameters[`${parameterKey}`][`${subParameter}`]
            });
          }
        });
      } else if (typeof filterParameters[`${parameterKey}`] === 'string') {
        // grab date strings and convert to date objects for comparison and filter.
        const filterDate = new Date(filterParameters[`${parameterKey}`]).getTime();

        filteredRestaurants = filteredRestaurants.filter(restaurant => {
          const restaurantDate = new Date(restaurant.validUntil).getTime();
          return restaurantDate >= filterDate;
        });
        
      } else {
        // checking that the filterParameters[`${parameterKey}`] has a value less than the restaurants data
        filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.maximumTableSize >= filterParameters[`${parameterKey}`]);
      }
    });
    // just a catch function to ensure filters or location sorting reverts if user deselects whilst filtering is active.
    if (userLocation) {
      calcDistances(userLocation, filteredRestaurants);
    } else {
      setFilteredList(filteredRestaurants);
    }
  }

  // search filter function
  const searchFilter = (searchValue) => {
    const searchRestaurants = allRestaurants;

    const searchFilteredList = searchRestaurants.filter(restaurant => {

      const cuisineAndNameArray = restaurant.cuisine.concat([restaurant.name.toLowerCase()]);
      const cuisineAndNameString = cuisineAndNameArray.join(' ');
      return cuisineAndNameString.includes(searchValue.toLowerCase());

    });
    // just a catch function to ensure filters or location sorting reverts if user deselections whilst filtering is active.
    if (userLocation) {
      calcDistances(userLocation, searchFilteredList);
    } else {
      setFilteredList(searchFilteredList);
    }
  };

  // get users location when share location button is clicked.
  const getLocation = () => {

    if (navigator.geolocation) {
      if (!userLocation) {
        navigator.geolocation.getCurrentPosition(position => {

          // grab user location and set state
          const userPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          const listToSort = [...filteredList];
          calcDistances(userPosition, listToSort);
        });
      } else {
        // a catch to ensure filters or location sorting reverts if user deselections whilst filtering is active.
        setUserLocation("");
        const latestRestaurants = distanceSortedList.sort((restaurantA, restaurantB) => restaurantA.offerAdded - restaurantB.offerAdded);
        setFilteredList(latestRestaurants);
      }
    } else {
      setUserLocation("");
    }
  }

  const calcDistances = (userPosition, listToSort) => {

    // create google coords objects for each restaurant location
    const restaurantLocations = listToSort.map(restaurant => new google.maps.LatLng(restaurant.location[0], restaurant.location[1]));

    // TODO - google API services will only take 25 origins and destinations in a single request, this will need dealing with...
    const service = new google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [userPosition],
        destinations: restaurantLocations,
        travelMode: 'DRIVING',
      }, (response, status) => {
        if (status === 'OK') {

          // grab response and drill down to data we need i.e. distances to
          const results = response.rows[0].elements;

          // for each restaurant cycle over the returned data and pull out the distance
          for (let i = 0; i < results.length; i++) {

            const element = results[i];

            listToSort[i].distanceTo = element.distance.value;
            listToSort[i].distanceToText = element.distance.text;

          }
          const sortedList = listToSort.sort((restaurantA, restaurantB) => restaurantA.distanceTo - restaurantB.distanceTo);

          setUserLocation(userPosition);
          setDistanceSortedList(sortedList);
        }
      }
    );
  }

  const renderLocationBtn = userLocation ? (
    <div className={styles.fa} onClick={() => getLocation()}>
      <FontAwesomeIcon icon={["fas", "map-marker-alt"]} className={styles.fa} />
    </div>
  ) : (
    <div className={styles.faActive} onClick={() => getLocation()}>
      <FontAwesomeIcon
        icon={["fas", "map-marker-alt"]}
        className={styles.faActive}
      />
    </div>
  );
  const renderList = userLocation ? distanceSortedList : filteredList;

  // create and pass the filtered restaurants list to CardList
  const contentJsx = () => {

    if (renderList === undefined) {
      return <p>Deals loading...</p>
    } else if (renderList.length) {
      return <CardList restaurants={renderList} />
    } else {
      return (<FeedbackPanel
        header="No matches"
        text="None of our restaurants matched that search"
      />)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <Link to="/">
          <img src={logoImage} />
        </Link>
        <SearchBar placeholder="Search by restaurants or cuisine..." searchFilter={searchFilter} />
      </div>
      <div className={styles.filterOptions}>
        <FilterButton filterRestaurants={filterRestaurants} />
        <Link to="/account">
        <span className={styles.profilelink}>
          <FontAwesomeIcon icon={["fas", "user"]} />
        </span>
      </Link>
        <div className={styles.location}>
          {renderLocationBtn}
        </div>
      </div>
      <section className={styles.dealsPage}>
        <h1 className={styles.title}>Latest Offers</h1>
        {contentJsx()}
      </section>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: (googleMapsApiKey)
})(DealsPage)
