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

    //format offAdded to time since last epoch (use getTime()) property in rastaurants array
    const restaurantsEpochTime = restaurants.map((restaurant) => {
      restaurant.offerAdded = new Date(restaurant.offerAdded).getTime();
      return restaurant;
    });
    
    const latestRestaurants = restaurantsEpochTime.sort((restaurantA, restaurantB) => restaurantA.offerAdded - restaurantB.offerAdded);

    const [filteredList, setFilteredList] = useState(latestRestaurants);

    // function cycles over all filter properties and filters the restaurants array using only matching values
    const filterRestaurants = (filterParameters) => {

      // just incase it hasn't been reset
      let filteredRestaurants = restaurants;
    
      const filterParameterKeys = Object.keys(filterParameters);

      filterParameterKeys.forEach(parameterKey => {

        if (typeof filterParameters[`${parameterKey}`] === 'object') {
          const subParameterKeys = Object.keys(filterParameters[`${parameterKey}`]);

          subParameterKeys.forEach(subParameter => {

            if(filterParameters[`${parameterKey}`][`${subParameter}`]){
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
      setFilteredList(filteredRestaurants);
    }

    // search filter function
    const searchFilter = (searchValue) => {
      const searchFilteredList = filteredList.filter(restaurant => {

        const cuisineAndNameArray = restaurant.cuisine.push(restaurant.name.toLowerCase());
        const cuisineAndNameString = cuisineAndNameArray.join(' ');
        return cuisineAndNameString.includes(searchValue.toLowerCase());
      });
      setFilteredList(searchFilteredList);
    };
  
    // const matchingRestaurants = filteredList.filter(searchFilter);
      // create and pass the filtered restaurants list to CardList
      const contentJsx = filteredList.length ? (
        <CardList restaurants={filteredList} />
      ) : (
          <FeedbackPanel
            header="No matches"
            text="None of our restaurants matched that search"
          />
        )

    return (
        <div className={styles.container}>
          <div className={styles.searchbar}>
            <SearchBar placeholder="Search for restaurants or by cuisine type..." searchFilter={searchFilter}/> 
          </div>  
          <div className={styles.filterOptions}>
            <FilterButton filterRestaurants={filterRestaurants}/>   
            <Location setFilteredList={setFilteredList} filteredList={filteredList}/> 
          </div>
          <section>
              {contentJsx}
          </section>
        </div>
    )
}

export default DealsPage;
