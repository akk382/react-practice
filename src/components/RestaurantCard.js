import { IMG_CDN_URL } from "../config/constants";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating}) => {
    return (
        <div className='card'>
            <img alt='' src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5>
            <h4>{avgRating} Stars</h4>
        </div>
    );
}

export default RestaurantCard;