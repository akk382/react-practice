import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUi";
import { RESTAURANT_LIST_URL } from "../config/constants";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [fetchedRestaurants, setFetchedRestaurants] = useState([]);
    const [restaurantLst, setRestaurantLst] = useState([]);

    useEffect(() => { getData(); }, []);
    
    async function getData() {
        await fetch(RESTAURANT_LIST_URL)
            .then(res => res.json())
            .then(jsonRes => jsonRes.data.cards)
            .then(cards => cards.filter(card => card.card.card.id === "restaurant_grid_listing"))
            .then(cards => {
                setRestaurantLst(cards[0].card.card.gridElements.infoWithStyle.restaurants);
                setFetchedRestaurants(cards[0].card.card.gridElements.infoWithStyle.restaurants)
            })
            .catch(err => console.error(err));
    }

    const filterResults = () => {
        if (searchText.trim() === "") {
            setRestaurantLst(fetchedRestaurants);
            setSearchText("");
            return;
        }
        setRestaurantLst(
            fetchedRestaurants.filter(
                restaurant => restaurant.info.name.toLowerCase()
                    .includes(searchText.toLowerCase())));
    }

    return (
        <React.Fragment>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search any keywords" 
                    className="search-input"
                    value={searchText}
                    onChange={(e) => {setSearchText(e.target.value)}} 
                />
                <button 
                    type="submit"
                    onClick={filterResults}>
                        Search
                </button>
            </div>
            <div className='restaurant-list'>
                {
                    restaurantLst.length == 0 ? <ShimmerUI /> :
                    restaurantLst.map(restaurant => {
                        return (
                            <RestaurantCard {...restaurant.info}  key={restaurant.info.id}/> 
                            // Added key to make reconcialiation diffing algorithm happy and remove error(react complaining) in console logs. The reconciliation diffing algorithm is being replaced by react fiber.
                            // no key(not acceptable) <<<<<<<<<< index key(last option) <<< unique key(best practices)
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default Body;