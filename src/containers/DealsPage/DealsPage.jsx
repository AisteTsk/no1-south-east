import React, { useState } from 'react';
import styles from './DealsPage.module.scss';

// components
import CardList from "../../components/CardList";
import FilterButton from '../../components/filterFunctionality/FilterButton';
import SearchBar from '../../components/filterFunctionality/SearchBar';
import FeedbackPanel from '../../components/filterFunctionality/FeedbackPanel';
import Location from '../../components/filterFunctionality/Location';

//  data
import restaurants from "../../data/restaurants";

const DealsPage = () => {

    // set the state
    const [searchText, setSearchText] = useState("");  
    const [filteredList, setFilteredList] = useState(restaurants);

    const filterRestaurants = (filterParameters) => {
      
      // here we grab the list of filter keys from the filterParameters object - we will cycle over them below
        const filterParameterKeys = Object.keys(filterParameters);

        // just incase it hasn't been reset
        let filteredRestaurants = restaurants;

        // Using the array for filterParameter keys we'll cycle over each key - note each key holds an object which has some further keys inside which relate to specific filters
        // (e.g. the dietary key hold the object {vegetarian: true, vegan: true etc.} we'll be grabbing those keys)
        filterParameterKeys.forEach(parameterKey => {

          // so here we collect the keys of the object mentioned above - we need to cycle over these also...
          if (typeof filterParameters[`${parameterKey}`] === 'object') {
            const subParameterKeys = Object.keys(filterParameters[`${parameterKey}`]);

            // here we do the forEach cycle and check if the filter boolean value matches that in the restaurants data
            subParameterKeys.forEach(subParameter => {

              // for each filter key we want to filter those restaurants accordingly BUT only if the filter is true or has a value
              if(filterParameters[`${parameterKey}`][`${subParameter}`]){
                console.log(filterParameters, subParameterKeys)
                filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant[`${parameterKey}`][`${subParameter}`] === filterParameters[`${parameterKey}`][`${subParameter}`]);
                
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
        setFilteredList(filteredRestaurants);

        // do ALL the filtering here
        // location?
    }


    const checkRestaurantName = (restaurant) => {
        // pass restaurant (1 restaurant from data array of restaurants) as a prop
        const restaurantName = restaurant.name.toLowerCase();
        //grab name value from restaurant data
        const space = ' ';
        const restaurantNameWithSpace = restaurantName.concat(space);
        // add space to end of restaurant name
        const restaurantCuisine = restaurant.cuisine.toString().toLowerCase().replace(/,/g,' ');
        // make restaurant cuisine type string - cuisine array converted to lower case string, commas replaced with spaces
        const restaurantNameAndCuisine = restaurantNameWithSpace.concat(restaurantCuisine);
        // combine restaurant name string with cuisine type string
        return restaurantNameAndCuisine.includes(searchText.toLowerCase());
        // return restaurant if restaurant name/cuisine string includes text user has searched for
      };
    
      const matchingRestaurants = filteredList.filter(checkRestaurantName);
                
      const sortLocation = (userLocation) => {
        
        // store the API key as a const
        const googleAPIKey = 'AIzaSyCLoboiJXEKQDw2TtA5jSs9wVawSJeJzro';

        // grab all the restaurant locations store an array?
        const destinations = matchingRestaurants.map(restaurant => restaurant.location)
        const destinationsString = destinations.join('|');
        
        // create the API URL query string using userlocation, restaurant locations and API key
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${userLocation}&destinations=${destinationsString}&key=${googleAPIKey}`;
        const testurl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=51.5253954,0.1790877&destinations=51.474333,0.044083&key=AIzaSyCLoboiJXEKQDw2TtA5jSs9wVawSJeJzro"
        // do fetch request, parse data and store somewhere
        fetch(testurl)
          .then(res => {
            res.json();
          }).then(data => {
            console.log(data);
          }).catch((error) => {
            console.log(error);
          })
       
        // use distance returned to sort restaurant array - might need to add a distance property to each restaurant object 
      }


      const contentJsx = matchingRestaurants.length ? (
        <CardList restaurants={matchingRestaurants} />
      ) : (
          <FeedbackPanel
            header="No matches"
            text="None of our restaurants matched that search"
          />
        )

    return (
        <>
          <div className={styles.searchbar}>
            <SearchBar placeholder="Search for restaurants or by cuisine type..." searchText ={searchText} updateSearchText={setSearchText}/>   
            <FilterButton filterRestaurants={filterRestaurants}/>   
            <Location sortLocation={sortLocation}/> 
          </div>
        <section>
            {contentJsx}
        </section>
        </>
    )
}

export default DealsPage;


// , cuisine: restaurantCuisine.includes(searchText.toLowerCase())}