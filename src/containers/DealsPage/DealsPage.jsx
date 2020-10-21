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

    const [searchText, setSearchText] = useState("");

    const filterRestaurants = (filterParameters) => {
        // do ALL the filtering here
        // SearchBar -> name -string & cuisine - array(strings)
        // Calendar -> validUntil - Date? & dayAvailable - Array(string)
        // MealDealType -> discountOnFood & discountOnDrinks - boolean
        // Slider -> maximumTableSize - number
        // DietaryReq -> dietaryRequirements - array(strings)
        // MealType -> sitting - array(strings)
        
    }
    console.log('search text:', searchText);
    
    const checkRestaurantName = (restaurant) => {
        const restaurantName = restaurant.name.toLowerCase();
        const space = ' ';
        const restaurantNameWithSpace = restaurantName.concat(space);
        const restaurantCuisine = restaurant.cuisine.toString().toLowerCase().replace(/,/g,' ');
        const restaurantNameAndCuisine = restaurantNameWithSpace.concat(restaurantCuisine);
        return restaurantNameAndCuisine.includes(searchText.toLowerCase());
      };
    
    //   // const toggleFav = (recipe) => {
    //   //   recipe.isFav = !recipe.isFav;
    //   // };
    
      const matchingRestaurants = restaurants.filter(checkRestaurantName);
      console.log(matchingRestaurants);
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
            <div className={styles.searchbar}>
            <SearchBar placeholder="Search for restaurants or by cuisine type..." searchText ={searchText} updateSearchText={setSearchText}/>       
            </div>
        </div>
        <section>
            {contentJsx}
        </section>
        </>
    )
}

export default DealsPage;


// , cuisine: restaurantCuisine.includes(searchText.toLowerCase())}