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

// Config Driven UI
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
    },
    {
        "info": {
            "id": "460653",
            "name": "Bhikharam Chandmal Rajuji",
            "cloudinaryImageId": "402a911f80af2cb42267bee92305e585",
            "locality": "Burrabazar",
            "areaName": "RamMandir",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Sweets",
                "Snacks",
                "South Indian",
                "Chaat",
                "Chinese",
                "Thalis"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "8486",
            "avgRatingString": "4.6",
            "totalRatingsString": "628",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.1 km",
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
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6e54a4b8-083b-48fe-82ad-266561df31dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kolkata/bhikharam-chandmal-rajuji-burrabazar-rammandir-rest460653",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "67717",
            "name": "Kookie Jar",
            "cloudinaryImageId": "0b69d733f3174c1d7ef9829e2a2fc33b",
            "locality": "Loudon Street",
            "areaName": "Loudon Street",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Desserts",
                "Snacks",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.8,
            "parentId": "5550",
            "avgRatingString": "4.8",
            "totalRatingsString": "15K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 21:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
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
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
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
            "link": "https://www.swiggy.com/city/kolkata/kookie-jar-loudon-street-rest67717",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "356638",
            "name": "Delights by INOX",
            "cloudinaryImageId": "b857fcf611707fedd3773eb02688f925",
            "locality": "5 Jawaharlal Nehru Road",
            "areaName": "Taltala",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Snacks"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "385095",
            "avgRatingString": "4.3",
            "totalRatingsString": "98",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-29 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
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
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
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
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6e54a4b8-083b-48fe-82ad-266561df31dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kolkata/delights-by-inox-5-jawaharlal-nehru-road-taltala-rest356638",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "119009",
            "name": "Banchharam's",
            "cloudinaryImageId": "mfceuvilrb9ktlxw3vvs",
            "locality": "Burrabazar",
            "areaName": "Burrabazar",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Sweets",
                "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "6148",
            "avgRatingString": "4.5",
            "totalRatingsString": "2.6K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 21:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Mishti.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
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
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Mishti.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
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
            "link": "https://www.swiggy.com/city/kolkata/banchharams-burrabazar-rest119009",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "491063",
            "name": "Blue Tokai Coffee Roasters",
            "cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
            "locality": "Near India Hobby Center",
            "areaName": "Park Street",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Cafe",
                "Coffee",
                "Beverages"
            ],
            "avgRating": 4.7,
            "parentId": "2682",
            "avgRatingString": "4.7",
            "totalRatingsString": "996",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
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
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
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
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-6e54a4b8-083b-48fe-82ad-266561df31dc"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/kolkata/blue-tokai-coffee-roasters-near-india-hobby-center-park-street-rest491063",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "398043",
            "name": "Balaram Mullick & Radharaman Mullick Sweets",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/24/655bb0a9-9473-4c35-9ed5-b1abd4030b89_398043.jpg",
            "locality": "Central Kolkata",
            "areaName": "Russel Street",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Sweets",
                "Confectionery",
                "Snacks"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "6142",
            "avgRatingString": "4.7",
            "totalRatingsString": "3.0K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 21:15:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Mishti.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Mishti.png",
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
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Mishti.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Mishti.png"
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
            "link": "https://www.swiggy.com/city/kolkata/balaram-mullick-and-radharaman-mullick-sweets-central-russel-street-rest398043",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "25622",
            "name": "Barista Coffee",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/1169bcaa-a717-4a70-b8fe-794088261089_25622.jpg",
            "locality": "New Market",
            "areaName": "New Market",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Beverages",
                "Snacks",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "416281",
            "avgRatingString": "4.6",
            "totalRatingsString": "876",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.3 km",
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
                "header": "ITEMS",
                "subHeader": "AT ₹129"
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
                    "ratingCount": "528"
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
            "link": "https://www.swiggy.com/city/kolkata/barista-coffee-new-market-rest25622",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "882106",
            "name": "Dough As You Like",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/14/7fa79552-2464-4dc2-bf5c-6d5953974194_882106 SS.jpg",
            "locality": "Subhas Sarobar Park",
            "areaName": "Sector V Salt Lake",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Snacks",
                "Ice Cream Cakes",
                "Burgers"
            ],
            "avgRating": 4.6,
            "parentId": "450342",
            "avgRatingString": "4.6",
            "totalRatingsString": "110",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 22:00:00",
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
            "isNewlyOnboarded": true,
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
            "link": "https://www.swiggy.com/city/kolkata/dough-as-you-like-subhas-sarobar-park-sector-v-salt-lake-rest882106",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "596807",
            "name": "Suchali's Artisan Bakehouse",
            "cloudinaryImageId": "f9f262d0c80a41de4c1a890eb36d1085",
            "locality": "Chowringhee",
            "areaName": "Park Street",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.7,
            "parentId": "196351",
            "avgRatingString": "4.7",
            "totalRatingsString": "791",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-28 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
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
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
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
                    "rating": "4.4",
                    "ratingCount": "607"
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
            "link": "https://www.swiggy.com/city/kolkata/suchalis-artisan-bakehouse-chowringhee-park-street-rest596807",
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
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5>
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
                        <RestaurantCard {...restaurant.info}  key={restaurant.info.id}/> // Added key to make reconcialiation diffing algorithm happy and remove error(react complaining) in console logs. The reconciliation diffing algorithm is being replaced by react fiber.
                        // no key(not acceptable) <<<<<<<<<< index key(last option) <<< unique key(best practices)
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