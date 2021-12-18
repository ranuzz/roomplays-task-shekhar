import axios from 'axios';

export async function search(term, demo) {
    if (demo) {
        return amazonSampleResponse;
    } else {

        var options = {
            method: 'GET',
            url: 'https://amazon23.p.rapidapi.com/product-search',
            params: {query: term, country: 'US'},
            headers: {
              'x-rapidapi-host': 'amazon23.p.rapidapi.com',
              'x-rapidapi-key': 'b13ad48679mshb75af84b0a2fa43p158832jsn0c574eac3f82'
            }
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch(err) {
            return {
                "totalProducts": "0",
                "result": []
            }
        }
    }
}

/*
Rapid API: wayfair

var options = {
  method: 'GET',
  url: 'https://wayfair.p.rapidapi.com/auto-complete',
  params: {query: 'red pillow'},
  headers: {
    'x-rapidapi-host': 'wayfair.p.rapidapi.com',
    'x-rapidapi-key': 'b13ad48679mshb75af84b0a2fa43p158832jsn0c574eac3f82'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

*/

/**
 
Rapid API : Amazon

var options = {
  method: 'GET',
  url: 'https://amazon23.p.rapidapi.com/product-search',
  params: {query: 'xbox', country: 'US'},
  headers: {
    'x-rapidapi-host': 'amazon23.p.rapidapi.com',
    'x-rapidapi-key': 'b13ad48679mshb75af84b0a2fa43p158832jsn0c574eac3f82'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

*/


export const wayfairSampleResponse = {
    "summary": {
      "request_id": "",
      "transaction_id": "I/WEwmG+LMCXXwSUNydsAg==",
      "page_type": "General",
      "response_hash": "0aa821546d54dffde04bebc5227f00a6e79acb21",
      "response_matches_prior_hash": false,
      "cache_seconds": 1800,
      "cache_always_check_server": false,
      "spv_custom_vars": "LoginStatusFlag=0"
    },
    "response": [
      {
        "schema_id": "WFSearchSuggestion",
        "value": "red pillows",
        "type": "keyword",
        "first_in_section": false,
        "is_reform": false,
        "keyword": false
      },
      {
        "schema_id": "WFSearchSuggestion",
        "value": "red pillow covers",
        "type": "keyword",
        "first_in_section": false,
        "is_reform": false,
        "keyword": false
      },
      {
        "schema_id": "WFSearchSuggestion",
        "value": "red pillow shams",
        "type": "keyword",
        "first_in_section": false,
        "is_reform": false,
        "keyword": false
      },
      {
        "schema_id": "WFSearchSuggestion",
        "value": "red pillow case",
        "type": "keyword",
        "first_in_section": false,
        "is_reform": false,
        "keyword": false
      },
      {
        "schema_id": "WFSearchSuggestion",
        "value": "bright red pillow shams",
        "type": "keyword",
        "first_in_section": false,
        "is_reform": false,
        "keyword": false
      },
      {
        "schema_id": "WFSearchSuggestion",
        "value": "red pillows for sofa",
        "type": "keyword",
        "first_in_section": false,
        "is_reform": false,
        "keyword": false
      },
      {
        "schema_id": "WFSearchSuggestion",
        "value": "velvet red pillows",
        "type": "keyword",
        "first_in_section": false,
        "is_reform": false,
        "keyword": false
      },
      {
        "schema_id": "WFSearchSuggestion",
        "value": "sunbrella jockey red pillows",
        "type": "keyword",
        "first_in_section": false,
        "is_reform": false,
        "keyword": false
      },
      {
        "schema_id": "WFSearchSuggestion",
        "value": "solid red pillows",
        "type": "keyword",
        "first_in_section": false,
        "is_reform": false,
        "keyword": false
      }
    ]
  };

export const amazonSampleResponse = {
    "totalProducts": "66899",
    "category": "aps",
    "result": [
      {
        "position": {
          "page": 1,
          "position": 3,
          "global_position": 3
        },
        "asin": "B09H73LTM6",
        "price": {
          "discounted": false,
          "current_price": 299.99,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 21,
          "rating": 4.5
        },
        "url": "https://www.amazon.com/dp/B09H73LTM6",
        "score": "94.50",
        "sponsored": false,
        "amazonChoice": true,
        "bestSeller": false,
        "amazonPrime": true,
        "title": "Xbox Series S – Fortnite & Rocket League Bundle",
        "thumbnail": "https://m.media-amazon.com/images/I/710+pgFk9sL._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 4,
          "global_position": 4
        },
        "asin": "B08DD5559K",
        "price": {
          "discounted": true,
          "current_price": 19.99,
          "currency": "USD",
          "before_price": 29.99,
          "savings_amount": 10,
          "savings_percent": 33.34
        },
        "reviews": {
          "total_reviews": 1957,
          "rating": 4.7
        },
        "url": "https://www.amazon.com/dp/B08DD5559K",
        "score": "9197.90",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": true,
        "amazonPrime": false,
        "title": "Minecraft Dungeons Hero Edition - Xbox One",
        "thumbnail": "https://m.media-amazon.com/images/I/71hirwQpnkL._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 5,
          "global_position": 5
        },
        "asin": "B087VM5XC6",
        "price": {
          "discounted": false,
          "current_price": 0,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 4495,
          "rating": 4.6
        },
        "url": "https://www.amazon.com/dp/B087VM5XC6",
        "score": "20677.00",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": false,
        "title": "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version with US Power Cable",
        "thumbnail": "https://m.media-amazon.com/images/I/61-x29sqlpS._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 6,
          "global_position": 6
        },
        "asin": "B08DF26MXW",
        "price": {
          "discounted": true,
          "current_price": 54.99,
          "currency": "USD",
          "before_price": 59.99,
          "savings_amount": 5,
          "savings_percent": 8.33
        },
        "reviews": {
          "total_reviews": 55055,
          "rating": 4.7
        },
        "url": "https://www.amazon.com/dp/B08DF26MXW",
        "score": "258758.50",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": true,
        "title": "Xbox Core Wireless Controller – Robot White",
        "thumbnail": "https://m.media-amazon.com/images/I/51gNmD2-otL._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 7,
          "global_position": 7
        },
        "asin": "B08CKL9K4Z",
        "price": {
          "discounted": true,
          "current_price": 29.99,
          "currency": "USD",
          "before_price": 59.99,
          "savings_amount": 30,
          "savings_percent": 50.01
        },
        "reviews": {
          "total_reviews": 460,
          "rating": 4.6
        },
        "url": "https://www.amazon.com/dp/B08CKL9K4Z",
        "score": "2116.00",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": true,
        "title": "Far Cry 6 Xbox Series X S, Xbox One Standard Edition",
        "thumbnail": "https://m.media-amazon.com/images/I/81EqZbPnrHL._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 8,
          "global_position": 8
        },
        "asin": "B07WDGB9P5",
        "price": {
          "discounted": false,
          "current_price": 499.99,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 3475,
          "rating": 4.4
        },
        "url": "https://www.amazon.com/dp/B07WDGB9P5",
        "score": "15290.00",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": false,
        "title": "Microsoft Xbox One X 1TB Console with Wireless Controller: Xbox One X Enhanced, HDR, Native 4K, Ultra HD (Renewed) (2017 M...",
        "thumbnail": "https://m.media-amazon.com/images/I/61H3Od2C64L._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 9,
          "global_position": 9
        },
        "asin": "B07CSLG8ST",
        "price": {
          "discounted": false,
          "current_price": 0,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 2288,
          "rating": 4.5
        },
        "url": "https://www.amazon.com/dp/B07CSLG8ST",
        "score": "10296.00",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": false,
        "title": "Microsoft Xbox One X 1TB, 4K Ultra HD Gaming Console, Black (Renewed) (2017 Model)",
        "thumbnail": "https://m.media-amazon.com/images/I/61OUjGDvtLL._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 10,
          "global_position": 10
        },
        "asin": "B073858Q9X",
        "price": {
          "discounted": false,
          "current_price": 0,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 3586,
          "rating": 4.6
        },
        "url": "https://www.amazon.com/dp/B073858Q9X",
        "score": "16495.60",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": false,
        "title": "Microsoft Xbox One S 1Tb Console - White [Discontinued]",
        "thumbnail": "https://m.media-amazon.com/images/I/61zjj2sgXML._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 12,
          "global_position": 12
        },
        "asin": "B00YXO5U40",
        "price": {
          "discounted": false,
          "current_price": 24.95,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 35412,
          "rating": 4.4
        },
        "url": "https://www.amazon.com/dp/B00YXO5U40",
        "score": "155812.80",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": true,
        "title": "Turtle Beach Recon 50 Xbox Gaming Headset for Xbox Series X, Xbox Series S, Xbox One, PS5, PS4, PlayStation, Nintendo Swit...",
        "thumbnail": "https://m.media-amazon.com/images/I/71QpZjrteES._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 13,
          "global_position": 13
        },
        "asin": "B08N6LXHHQ",
        "price": {
          "discounted": false,
          "current_price": 21.99,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 2453,
          "rating": 4.6
        },
        "url": "https://www.amazon.com/dp/B08N6LXHHQ",
        "score": "11283.80",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": true,
        "amazonPrime": true,
        "title": "2 Pack Rechargeable Controller Battery Pack for Xbox One/Xbox Series X S with 4 Battery Cover Play and Charge Kit with Mic...",
        "thumbnail": "https://m.media-amazon.com/images/I/71f+6nKRs1L._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 14,
          "global_position": 14
        },
        "asin": "B074WPGYRF",
        "price": {
          "discounted": false,
          "current_price": 780,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 5394,
          "rating": 4.6
        },
        "url": "https://www.amazon.com/dp/B074WPGYRF",
        "score": "24812.40",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": false,
        "title": "Microsoft Xbox One X 1Tb Console With Wireless Controller: Xbox One X Enhanced, Hdr, Native 4K, Ultra Hd (Discontinued)",
        "thumbnail": "https://m.media-amazon.com/images/I/61ux1cU49XL._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 15,
          "global_position": 15
        },
        "asin": "B01LPNKGGI",
        "price": {
          "discounted": false,
          "current_price": 69.97,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 7777,
          "rating": 4.5
        },
        "url": "https://www.amazon.com/dp/B01LPNKGGI",
        "score": "34996.50",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": true,
        "amazonPrime": true,
        "title": "Microsoft 4N6-00001 Xbox Controller + Cable for Windows, Black",
        "thumbnail": "https://m.media-amazon.com/images/I/61iMG1ddWZL._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 17,
          "global_position": 17
        },
        "asin": "B00KRT2QCY",
        "price": {
          "discounted": false,
          "current_price": 279.99,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 456,
          "rating": 4
        },
        "url": "https://www.amazon.com/dp/B00KRT2QCY",
        "score": "1824.00",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": false,
        "title": "Xbox 360 4GB Slim Console - (Renewed)",
        "thumbnail": "https://m.media-amazon.com/images/I/61oFqsoj9nL._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 18,
          "global_position": 18
        },
        "asin": "B08LGWJ219",
        "price": {
          "discounted": false,
          "current_price": 99.99,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 5006,
          "rating": 4.2
        },
        "url": "https://www.amazon.com/dp/B08LGWJ219",
        "score": "21025.20",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": true,
        "amazonPrime": true,
        "title": "Racing Wheel Overdrive Designed for Xbox Series X|S By HORI - Officially Licensed by Microsoft",
        "thumbnail": "https://m.media-amazon.com/images/I/61vCt5lcX0L._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 19,
          "global_position": 19
        },
        "asin": "B074RNL1RX",
        "price": {
          "discounted": true,
          "current_price": 80.99,
          "currency": "USD",
          "before_price": 159.99,
          "savings_amount": 79,
          "savings_percent": 49.38
        },
        "reviews": {
          "total_reviews": 6417,
          "rating": 4.4
        },
        "url": "https://www.amazon.com/dp/B074RNL1RX",
        "score": "28234.80",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": true,
        "amazonPrime": true,
        "title": "Razer Wolverine Ultimate Officially Licensed Xbox One Controller: 6 Remappable Buttons and Triggers - Interchangeable Thum...",
        "thumbnail": "https://m.media-amazon.com/images/I/81kKfnnHeuL._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 20,
          "global_position": 20
        },
        "asin": "B071S9R9YB",
        "price": {
          "discounted": true,
          "current_price": 49,
          "currency": "USD",
          "before_price": 59,
          "savings_amount": 10,
          "savings_percent": 16.95
        },
        "reviews": {
          "total_reviews": 5464,
          "rating": 4.5
        },
        "url": "https://www.amazon.com/dp/B071S9R9YB",
        "score": "24588.00",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": true,
        "title": "ASTRO Gaming A10 Gaming Headset - Green/Black - Xbox One",
        "thumbnail": "https://m.media-amazon.com/images/I/7166Mdb8gqL._AC_UY218_.jpg"
      },
      {
        "position": {
          "page": 1,
          "position": 22,
          "global_position": 22
        },
        "asin": "B07ZPG9J7T",
        "price": {
          "discounted": false,
          "current_price": 439.99,
          "currency": "USD",
          "before_price": 0,
          "savings_amount": 0,
          "savings_percent": 0
        },
        "reviews": {
          "total_reviews": 1,
          "rating": 3
        },
        "url": "https://www.amazon.com/dp/B07ZPG9J7T",
        "score": "3.00",
        "sponsored": false,
        "amazonChoice": false,
        "bestSeller": false,
        "amazonPrime": false,
        "title": "Sponsored Ad - Xbox 360 Limited Edition Halo 4 Bundle (Renewed)",
        "thumbnail": "https://m.media-amazon.com/images/I/71bfZh6UUdL._AC_UY218_.jpg"
      }
    ]
  };