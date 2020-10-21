import React, { useState } from 'react';
import './DealsPage.module.scss';

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
        return restaurantName.includes(searchText.toLowerCase());
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
            <SearchBar placeholder="Search for restaurants..." searchText ={searchText} updateSearchText={setSearchText}/>       
        </div>
        <section>
            {contentJsx}
        </section>
        </>
    )
}

export default DealsPage;

