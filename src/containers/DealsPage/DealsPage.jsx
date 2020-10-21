import React, { useState } from 'react';
import './DealsPage.module.scss';

// components
import CardList from "../../Components/CardList";
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
          // for each filter key we want to filter those restaurants accordingly BUT only if the filter is true or has a value
          if(filterParameters[`${parameterKey}`]){
            filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant[`${parameterKey}`] === filterParameters[`${parameterKey}`]);
          }
        });

        setFilteredList(filteredRestaurants);
        console.log('filter function fire', filteredRestaurants);
        // do ALL the filtering here
        // SearchBar -> name -string & cuisine - array(strings)
        // Calendar -> validUntil - Date? & dayAvailable - Array(string)
        // MealDealType -> discountOnFood & discountOnDrinks - boolean
        // Slider -> maximumTableSize - number
        // DietaryReq -> dietaryRequirements - array(strings)
        // MealType -> sitting - array(strings)   
    }


    const checkRestaurantName = (restaurant) => {
        const restaurantName = restaurant.name.toLowerCase();
        return restaurantName.includes(searchText.toLowerCase());
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
        <div className="filter-container">
            <FilterButton filterRestaurants={filterRestaurants}/>
            <SearchBar placeholder="Search for restaurants..." searchText ={searchText} updateSearchText={setSearchText}/>       
        </div>
        <section>
            {contentJsx}
        </section>
        </>
    )
}

export default DealsPage;

