import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config/constants";
import React, { useState } from "react";

const Body = () => {
    const [searctText, setSearchText] = useState("");
    const [restaurantLst, setRestaurantLst] = useState(restaurantList);

    const filterResults = () => {
        if (searctText.trim() === "") {
            setRestaurantLst(restaurantList);
            setSearchText("");
            return;
        }
        setRestaurantLst(
            restaurantList.filter(
                restaurant => restaurant.info.name.toLowerCase()
                    .includes(searctText.toLowerCase())));
    }

    return (
        <React.Fragment>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search any keywords" 
                    className="search-input"
                    value={searctText}
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
                    restaurantLst.map(restaurant => {
                        return (
                            <RestaurantCard {...restaurant.info}  key={restaurant.info.id}/> // Added key to make reconcialiation diffing algorithm happy and remove error(react complaining) in console logs. The reconciliation diffing algorithm is being replaced by react fiber.
                            // no key(not acceptable) <<<<<<<<<< index key(last option) <<< unique key(best practices)
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default Body;