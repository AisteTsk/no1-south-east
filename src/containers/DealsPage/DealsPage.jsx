import React, { useState } from 'react';
import styles from './DealsPage.module.scss';

// components
import CardList from "../../components/CardList";
import FilterButton from '../../component/filterFunctionality/FilterButton';
import SearchBar from '../../component/filterFunctionality/SearchBar';
import FeedbackPanel from '../../component/filterFunctionality/FeedbackPanel';

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
                filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant[`${parameterKey}`][`${subParameter}`] === filterParameters[`${parameterKey}`][`${subParameter}`]);
              }
            });

          } else {
            // checking that the filterParameters[`${parameterKey}`] has a value less than the restaurants data
            filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.maximumTableSize >= filterParameters[`${parameterKey}`]);
          }
        });

        setFilteredList(filteredRestaurants);
        // console.log('filter function fire', filteredRestaurants);
        // do ALL the filtering here
        // Calendar -> validUntil - Date? & dayAvailable - Array(string)
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
          </div>
        <section>
            {contentJsx}
        </section>
        </>
    )
}

export default DealsPage;


// , cuisine: restaurantCuisine.includes(searchText.toLowerCase())}