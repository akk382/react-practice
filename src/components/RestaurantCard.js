import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../config/constants";
import { useEffect, useState } from "react";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating, menuLink}) => {

    // TODO: use useParams hook to capture params to RestaurantMenu
    // TODO
    // const [clicked, setClicked] = useState(false);

    // TODO
    // useEffect(() => {
    //     fetch(menuLink)
    //     .then(res => res.json())
    //     .then(jsonRes => jsonRes.body.data.cards)
    //     .then(cards => cards.filter(card => card.groupedCard != null))
    //     .then(cards => cards[0].groupedCard.cardGroupMap.REGULAR)
    //     .then(cards => console.log(cards))
    //     .catch(err => console.error(err));
    // }, [clicked]);

    return (
        <div className='card'>
            {/* <Link to='menu/:id'>    // TODO */}
                <img alt='' src={IMG_CDN_URL + cloudinaryImageId} />
            {/* </Link> */}
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5>
            <h4>{avgRating || '--'} Stars</h4>
        </div>
    );
}

export default RestaurantCard;