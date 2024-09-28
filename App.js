import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './images/logo.jpeg'; // Add a logo.jpeg of your choice

// Designing Layout of the app
    /**
     * Header
     *  - Logo
     *  - Nav Items (right)
     *  - Cart
     * Body
     *  - Search Bar
     *  - Restaurant List
     *      - Restaurant Card
     *          - Image
     *          - Name
     *          - Rating
     *          - Tags
     *          - Cusines
     * Footer
     *  - Links
     *  - Copyright
     */

const restaurantList = [
    {
        "info": {
            "id": "547141",
            "name": "Haryana Sweets",
            "cloudinaryImageId": "zxkak5bbydcjdk1whoej",
            "locality": "Kankurgachhi",
            "areaName": "Kankurgachhi",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Sweets",
                "Snacks",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "94245",
            "avgRatingString": "4.6",
            "totalRatingsString": "1.5K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 21:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "2.6K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6e54a4b8-083b-48fe-82ad-266561df31dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kolkata/haryana-sweets-kankurgachhi-rest547141",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "19521",
            "name": "Tea Junction",
            "cloudinaryImageId": "77d2fffe27cd59af5045a102d08af522",
            "locality": "New Market",
            "areaName": "New Market Area",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Beverages",
                "Snacks",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "4311",
            "avgRatingString": "4.2",
            "totalRatingsString": "1.1K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 21:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "71"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6e54a4b8-083b-48fe-82ad-266561df31dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kolkata/tea-junction-new-market-new-market-area-rest19521",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "67185",
            "name": "Banana Leaf",
            "cloudinaryImageId": "xuyoyp4zowb5v4hknkum",
            "locality": "Ballygunge",
            "areaName": "Central Kolkata",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "South Indian",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "1285",
            "avgRatingString": "4.4",
            "totalRatingsString": "6.3K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6e54a4b8-083b-48fe-82ad-266561df31dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kolkata/banana-leaf-ballygunge-central-kolkata-rest67185",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "593007",
            "name": "Flurys",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/26/f08959e5-cfe9-4e7b-b5d2-f32c2d81b639_593007.jpg",
            "locality": "Kiran Sankar Roy Road",
            "areaName": "Central Kolkata",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Snacks"
            ],
            "avgRating": 4.6,
            "parentId": "5537",
            "avgRatingString": "4.6",
            "totalRatingsString": "193",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 21:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6e54a4b8-083b-48fe-82ad-266561df31dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kolkata/flurys-kiran-sankar-roy-road-central-kolkata-rest593007",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "58090",
            "name": "Cakes",
            "cloudinaryImageId": "qlpywzh0rp3zc7n1qngc",
            "locality": "Beliaghata",
            "areaName": "Beliaghata",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Snacks"
            ],
            "avgRating": 4.7,
            "parentId": "4861",
            "avgRatingString": "4.7",
            "totalRatingsString": "8.7K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 20:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "205"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6e54a4b8-083b-48fe-82ad-266561df31dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kolkata/cakes-beliaghata-rest58090",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "128468",
            "name": "Dariole",
            "cloudinaryImageId": "muxbcwaegpr6mdogtach",
            "locality": "Shakespeare Sarani",
            "areaName": "Shakespeare Sarani",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.7,
            "parentId": "6960",
            "avgRatingString": "4.7",
            "totalRatingsString": "2.7K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "656"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6e54a4b8-083b-48fe-82ad-266561df31dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kolkata/dariole-shakespeare-sarani-rest128468",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating}) => {
    return (
        <div className='card'>
            <img alt='' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} Stars</h4>
        </div>
    );
}

const Header = () => {
    return (
        <div className='header'>
            <a href='/'>
                <img alt='App Logo' src={logo} className='logo'/>
            </a>
             <ul className='nav-items'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}

const Body = () => {
    return (
        <div className='restaurant-list'>
            {
                restaurantList.map(restaurant => {
                    return (
                        <RestaurantCard {...restaurant.info}/>
                    )
                })
            }
        </div>
    );

}

const Footer = () => {
    return (
        <>
            <h3>Footer</h3>
        </>
    );
}

const AppLayout = () => {

    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);