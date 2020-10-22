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

        const filterParameterKeys = Object.keys(filterParameters);

        // just incase it hasn't been reset
        let filteredRestaurants = restaurants;

        // here we grab the list of filter keys and cycle over them
        filterParameterKeys.forEach(parameterKey => {
          const subParameterKeys = Object.keys(filterParameters[`${parameterKey}`]);

          subParameterKeys.forEach(subParameter => {
            // for each filter key we want to filter those restaurants accordingly BUT only if the filter is true or has a value
            if(filterParameters[`${parameterKey}`][`${subParameter}`]){
              filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant[`${parameterKey}`][`${subParameter}`] === filterParameters[`${parameterKey}`][`${subParameter}`]);
            }
          });
        });

        setFilteredList(filteredRestaurants);
        console.log('filter function fire', filteredRestaurants);
        // do ALL the filtering here
        // Calendar -> validUntil - Date? & dayAvailable - Array(string)
        // Slider -> maximumTableSize - number  
        // location?
    }


    const checkRestaurantName = (restaurant) => {
        console.log(restaurant);
        const restaurantName = restaurant.name.toLowerCase();
        const space = ' ';
        const restaurantNameWithSpace = restaurantName.concat(space);
        const restaurantCuisine = restaurant.cuisine.toString().toLowerCase().replace(/,/g,' ');
        const restaurantNameAndCuisine = restaurantNameWithSpace.concat(restaurantCuisine);
        return restaurantNameAndCuisine.includes(searchText.toLowerCase());
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