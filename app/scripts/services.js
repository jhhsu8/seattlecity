"use strict";
var routerApp = angular.module("routerApp");

//define a service called photoFactory
routerApp
  .service("photoFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Chihuly Garden and Glass",
        image: "../images/chihuly_garden_seattle.jpg"
      },
      {
        id: 1,
        name: "The view of Downtown Seattle",
        image: "../images/downtown-seattle.jpg"
      },
      {
        id: 2,
        name: "The skyline view from Kerry Park",
        image: "../images/kerry_park_seattle.jpg"
      },
      {
        id: 3,
        name: "Mount Rainier",
        image: "../images/mount_rainier.jpg"
      },
      {
        id: 4,
        name: "Pike Place Market",
        image: "../images/pike_place_market.jpg"
      },
      {
        id: 5,
        name: "The Space Needle at Seattle Center",
        image: "../images/seattle_center.jpg"
      },
      {
        id: 6,
        name: "Seattle Neighborhoods around Lake Union",
        image: "../images/seattle_neighborhoods.jpg"
      },
      {
        id: 7,
        name:
          "Seattle Tech Growth Chart (source: JLL Project and Development Services)",
        image: "../images/seattle_tech_growth_chart.jpg"
      },
      {
        id: 8,
        name: "A Metro bus and a Link light rail car",
        image: "../images/seattle_transportation.jpg"
      },
      {
        id: 9,
        name: "Space Needle Logo",
        image: "../images/space_needle_logo.jpg"
      }];

    // implement function getPhoto(index)
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

//define a service called queenanneFactory
  .service("queenanneFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Queen Anne Hill",
        image: "../images/queen_anne_seattle.jpg"
      },
      {
        id: 1,
        name: "Kerry Park on Queen Anne Hill",
        image: "../images/kerry_park_viewpoint.jpg"
      },
      {
        id: 2,
        name: "Coleman House in Queen Anne",
        image: "../images/coleman_house.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

//define a service called fremontFactory
  .service("fremontFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Fremont Bridge",
        image: "../images/fremont_bridge_seattle.jpg"
      },
      {
        id: 1,
        name: "A shopping district in Fremont",
        image: "../images/fremont_shopping.jpg"
      },
      {
        id: 2,
        name: "Fremont Troll",
        image: "../images/fremont_troll.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

//define a service called downtownFactory
  .service("downtownFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Downtown Seattle Waterfront",
        image: "../images/downtown_seattle.jpg"
      },
      {
        id: 1,
        name: "Pike Place Market",
        image: "../images/pike_place_market_inside.jpg"
      },
      {
        id: 2,
        name: "Gum Wall in Post Alley under Pike Place Market",
        image: "../images/gum_wall.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

//define a service called kerryparkFactory
  .service("kerryparkFactory", function() {
    var photos = [
      {
        id: 1,
        name: "Kerry Park",
        image: "../images/kerry_park_sunset.jpg"
      },
      {
        id: 2,
        name: "The Changing Form sculpture",
        image: "../images/kerry_park_sculpture.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

//define a service called gasworksparkFactory
  .service("gasworksparkFactory", function() {
    var photos = [
      {
        id: 1,
        name: "Gas Works Park",
        image: "../images/gas_works_park_top.jpg"
      },
      {
        id: 2,
        name: "A picnic day at Gas Works Park",
        image: "../images/gas_works_park.jpg"
      },
    
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

//define a service called amazonFactory
  .service("amazonFactory", function() {
    var photos = [
      {
        id: 0,
        name: "Amazon Spheres in South Lake Union",
        image: "../images/amazon_seattle.jpg"
      },
      {
        id: 1,
        name: "A 5-year chart of Amazon stock performance (1/2013 - 12/2017)",
        image: "../images/amzn.png"
      },
      {
        id: 2,
        name: "Amazon Books in University Village",
        image: "../images/amazon_books.jpg"
      },
      {
        id: 3,
        name: "Amazon Go in Downtown Seattle",
        image: "../images/amazon_go.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

//define a service called googleFactory
  .service("googleFactory", function() {
    var photos = [
      {
        id: 0,
        name: "A Google office in Fremont",
        image: "../images/google_seattle.jpg"
      },
      {
        id: 1,
        name: "A 5-year chart of Google stock performance (1/2013 - 12/2017)",
        image: "../images/goog.png"
      },
      {
        id: 2,
        name: "A future Google campus in South Lake Union",
        image: "../images/google_campus.jpg"
      },
      {
        id: 3,
        name: "The Google campus in Fremont",
        image: "../images/google_fremont.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

//define a service called facebookFactory
  .service("facebookFactory", function() {
    var photos = [
      {
        id: 0,
        name: "A Facebook office buliding in South Lake Union",
        image: "../images/facebook_seattle.jpg"
      },
      {
        id: 1,
        name: "A 5-year chart of Facebook stock performance (1/2013 - 12/2017)",
        image: "../images/fb.png"
      },
      {
        id: 2,
        name: "On the top of the Facebook office buliding in South Lake Union",
        image: "../images/facebook_office_top.jpg"
      },
      {
        id: 3,
        name: "Inside a Seattle Facebook office",
        image: "../images/facebook_office.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

//define a service called microsoftFactory
  .service("microsoftFactory", function() {
    var photos = [{
        id: 0,
        name: "A building on the Microsoft Redmond campus",
        image: "../images/microsoft_seattle.jpg"
      },
      {
        id: 1,
        name: "A 5-year chart of Microsoft stock performance (1/2013 - 12/2017)",
        image: "../images/msft.png"
      },
      {
        id: 2,
        name: "Microsoft Store in Bellevue Square Mall",
        image: "../images/microsoft_store.jpg"
      },
      {
        id: 3,
        name: "The Microsoft Redmond campus",
        image: "../images/microsoft_campus.jpg"
      }
    ];

    // implement two functions, getPhotos and getPhoto(index)
    this.getPhotos = function() {
      return photos;
    };
    this.getPhoto = function(index) {
      return photos[index];
    };
  })

//define a service called videoFactory
  .service("videoFactory", function() {
    var videos = [
      {
        url: "https://www.youtube.com/watch?v=d6qIgmUsUO0"
      },
      {
        url: "https://www.youtube.com/watch?v=bq-bXgpSMxE"
      },
      {
        url: "https://www.youtube.com/watch?v=FT6zUcqu42Y"
      },
      {
        url: "https://www.youtube.com/watch?v=pdO1mO6PHDU"
      }
    ];

    // implement function called getVideos
    this.getVideos = function() {
      return videos;
    };
  })

//define a service called hotelFactory
  .service("hotelFactory", function() {
    var hotels = [
      {
        id: 0,
        name: "Holiday Inn Seattle Downtown",
        rating: 4.1,
        price: 99,
        link: "https://www.ihg.com/holidayinn/hotels/us/en/seattle/seasc/hoteldetail"
      },
      {
        id: 1,
        name: "Travelodge By the Space Needle",
        rating: 3.4,
        price: 67,
        link: "http://www.travelodgeseattlecenter.com/#gref"
      },
      {
        id: 2,
        name: "Holiday Inn Express & Suites Seattle-Sea-Tac Airport",
        rating: 4.1,
        price: 90,
        link: "https://www.ihg.com/holidayinnexpress/hotels/us/en/seatac/seaib/hoteldetail"
      },
      {
        id: 3,
        name: "Holiday Inn Express & Suites Seattle-City Center",
        rating: 4,
        price: 103,
        link: "https://www.ihg.com/holidayinnexpress/hotels/us/en/seattle/seawa/hoteldetail"
      },
      {
        id: 4,
        name: "Quality Inn & Suites Seattle Center",
        rating: 3.3,
        price: 85,
        link: "http://www.qualityinnseattle.com/"
      },
      {
        id: 5,
        name: "Hyatt House Seattle/Downtown",
        rating: 4.4,
        price: 109,
        link: "https://seattledowntown.house.hyatt.com/en/hotel/home.html"
      },
      {
        id: 6,
        name: "Comfort Inn & Suites - Northgate",
        rating: 3.7,
        price: 71,
        link: "https://www.choicehotels.com/washington/seattle/comfort-inn-hotels/wa217?source=gyxt"
      },
      {
        id: 7,
        name: "Holiday Inn Express & Suites North Seattle - Shoreline",
        rating: 4.1,
        price: 88,
        link: "https://www.ihg.com/holidayinnexpress/hotels/us/en/seattle/seaau/hoteldetail"
      },
      {
        id: 8,
        name: "Courtyard by Marriott Seattle Sea-Tac Area",
        rating: 4.1,
        price: 84,
        link: "https://www.marriott.com/hotels/travel/seawv-courtyard-seattle-sea-tac-area/"
      }
    ];

    // implement function called getHotels
    this.getHotels = function() {
      return hotels;
    };
  });
