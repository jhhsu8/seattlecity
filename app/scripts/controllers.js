'use strict';

var routerApp = angular.module('routerApp');

routerApp.run(['$transitions', function ($transitions) {
    $transitions.onSuccess({}, function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
}]);

routerApp.controller('PhotoController', ['$scope', 'photoFactory', function($scope, photoFactory) {
    
    $scope.date = new Date();
    
    // get photos
    $scope.photoHome = photoFactory.getPhoto(1);
    $scope.footerPhoto = photoFactory.getPhoto(9);
    $scope.introductionPhoto = photoFactory.getPhoto(3);
    $scope.transportationPhoto = photoFactory.getPhoto(8);
    $scope.neighborhoodsPhoto = photoFactory.getPhoto(6);
    $scope.attractionsPhoto = photoFactory.getPhoto(5);
    $scope.parksPhoto = photoFactory.getPhoto(2);
    $scope.retailsPhoto = photoFactory.getPhoto(4);
    $scope.museumsPhoto = photoFactory.getPhoto(0);
    $scope.techPhoto = photoFactory.getPhoto(7);
}]);

routerApp.controller('QueenAnneController', ['$scope', 'queenanneFactory', function($scope, queenanneFactory) {
    
    $scope.photo = queenanneFactory.getPhoto(0);
    
    //create a photo slideshow
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photos = queenanneFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = queenanneFactory.getPhoto(current_index);
    
    //function for hiding or unhiding button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (curr_idx === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    }
    //next button
    $scope.next = function() {
      
        if (current_index < length - 1) {
            
            current_index++; // increment index by one
        }
        
        $scope.current_photo = queenanneFactory.getPhoto(current_index); // current photo
        
        button(current_index);
    };
    //previous button
    $scope.previous = function() {
       
        if (current_index > 1) {
            
            current_index--; // decrement index by one
        }
        
        $scope.current_photo = queenanneFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
}]);

routerApp.controller('FremontController', ['$scope', 'fremontFactory', function($scope, fremontFactory) {

    $scope.photo = fremontFactory.getPhoto(0);
    
    //create a photo slideshow
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photos = fremontFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = fremontFactory.getPhoto(current_index);
    
    //function for hiding or unhiding button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (curr_idx === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    }
    //next button
    $scope.next = function() {
      
        if (current_index < length - 1) {
            
            current_index++; // increment index by one
        }
        
        $scope.current_photo = fremontFactory.getPhoto(current_index);  // current photo
        button(current_index);
    };
    //previous button
    $scope.previous = function() {
     
        if (current_index > 1) {
            
            current_index--; // decrement index by one
        }
        
        $scope.current_photo = fremontFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
}]);

routerApp.controller('DowntownController', ['$scope', 'downtownFactory', function($scope, downtownFactory) {
    
    $scope.photo = downtownFactory.getPhoto(0);
    
    //create a photo slideshow
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photos = downtownFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = downtownFactory.getPhoto(current_index);
    
    //function for hiding or unhiding button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (curr_idx === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    }
    //next button
    $scope.next = function() {
    
        if (current_index < length - 1) {
            
            current_index++; // increment index by one
        }
        
        $scope.current_photo = downtownFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
    //previous button
    $scope.previous = function() {
     
        if (current_index > 1) {
            
            current_index--; // decrement index by one
        }
        
        $scope.current_photo = downtownFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
    
}]);

routerApp.controller('KerryParkController', ['$scope', 'kerryparkFactory', function($scope, kerryparkFactory) {
    
    $scope.photo = kerryparkFactory.getPhoto(0);
    
    //create a photo slideshow
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photos = kerryparkFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 0;
    $scope.image_number = length;
    $scope.current_photo = kerryparkFactory.getPhoto(current_index);
    
    //function for hiding or unhiding button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (curr_idx === 0) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    }
    //next button
    $scope.next = function() {
       
        if (current_index < length) {
            
            current_index++; // increment index by one
        }
        
        $scope.current_photo = kerryparkFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
    //previous button
    $scope.previous = function() {
      
        if (current_index > 0) {
           
            current_index--; // decrement index by one
        }
        
        $scope.current_photo = kerryparkFactory.getPhoto(current_index); // current photo

        button(current_index);
    };
}]);

routerApp.controller('GasWorksParkController', ['$scope', 'gasworksparkFactory', function($scope, gasworksparkFactory) {

    $scope.photo = gasworksparkFactory.getPhoto(0);
    //create a photo slideshow
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photos = gasworksparkFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 0;
    $scope.image_number = length;
    $scope.current_photo = gasworksparkFactory.getPhoto(current_index);
    
    //function for hiding or unhiding button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (curr_idx === 0) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    }
    //next button
    $scope.next = function() {
      
        if (current_index < length) {
            
            current_index++; // increment index by one
        } 
        
        $scope.current_photo = gasworksparkFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
    //previous button
    $scope.previous = function() {
    
        if (current_index > 0) {
            
            current_index--; // decrement index by one
        }   
        
        $scope.current_photo = gasworksparkFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
}]);

routerApp.controller('AmazonController', ['$scope', 'amazonFactory', function($scope, amazonFactory) {

    $scope.photo = amazonFactory.getPhoto(0);
    
    //create a photo slideshow
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photos = amazonFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = amazonFactory.getPhoto(current_index);
    
    //function for hiding or unhiding button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (curr_idx === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    }
    //next button
    $scope.next = function() {
       
        if (current_index < length - 1) {
            
            current_index++; // increment index by one
        }
        
        $scope.current_photo = amazonFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
    //previous button
    $scope.previous = function() {
       
        if (current_index > 1) {
            
            current_index--; // decrement index by one
        }
        
        $scope.current_photo = amazonFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
    
}]);

routerApp.controller('GoogleController', ['$scope', 'googleFactory', function($scope, googleFactory) {

    $scope.photo = googleFactory.getPhoto(0);
    //create a photo slideshow
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photos = googleFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = googleFactory.getPhoto(current_index);
    
    //function for hiding or unhiding button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (curr_idx === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    }
    //next button
    $scope.next = function() {
        
        if (current_index < length - 1) {
            
            current_index++; // increment index by one
        }
        
        $scope.current_photo = googleFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
    //previous button
    $scope.previous = function() {
        
        if (current_index > 1) {
            
            current_index--; // decrement index by one
        }
        
        $scope.current_photo = googleFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
}]);

routerApp.controller('FacebookController', ['$scope', 'facebookFactory', function($scope, facebookFactory) {
    
    $scope.photo = facebookFactory.getPhoto(0);
    //create a photo slideshow
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photos = facebookFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = facebookFactory.getPhoto(current_index);
    
    //function for hiding or unhiding button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (curr_idx === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    }
    //next button
    $scope.next = function() {
      
        if (current_index < length - 1) {
            
            current_index++; // increment index by one
        }
        
        $scope.current_photo = facebookFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
    
    //previous button
    $scope.previous = function() {
        
        if (current_index > 1) {
            
            current_index--; // decrement index by one
        }
        
        $scope.current_photo = facebookFactory.getPhoto(current_index); // current photo
        button(current_index);
    };  
}]);


routerApp.controller('MicrosoftController', ['$scope', 'microsoftFactory', function($scope, microsoftFactory) {
    
    $scope.photo = microsoftFactory.getPhoto(0);
    //create a photo slideshow
    $scope.nextButton = false
    $scope.previousButton = true;
    $scope.photos = microsoftFactory.getPhotos();
    var length = $scope.photos.length;
    var current_index = 1;
    $scope.image_number = length - 1;
    $scope.current_photo = microsoftFactory.getPhoto(current_index);
    
    //function for enabling or disabling button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        }
        else {
            $scope.nextButton = false;
        }
        if (curr_idx === 1) {
            $scope.previousButton = true;
        }
        else {
            $scope.previousButton = false;
        }
    }
    //next button
    $scope.next = function() {
 
        if (current_index < length - 1) {
            
            current_index++; // increment index by one
        }
        
        $scope.current_photo = microsoftFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
    
    //previous button
    $scope.previous = function() {
    
        if (current_index > 1) {
            
            current_index--; // decrement index by one
        }
        
        $scope.current_photo = microsoftFactory.getPhoto(current_index); // current photo
        button(current_index);
    };
}]);

routerApp.controller('HotelController', ['$scope', 'hotelFactory', function($scope, hotelFactory) {
    
    $scope.clickName = true;
    $scope.clickPrice = false;
    $scope.clickRating = false;
    $scope.hotels = hotelFactory.getHotels();
    
    // sort by hotel name
    $scope.sortbyname = function() {
        $scope.sortprice = "";
        $scope.sortrating = "";
        $scope.sortname = "name";
        $scope.clickPrice = false;
        $scope.clickRating = false;
        $scope.clickName = true;
    } 
    
    // sort by hotel price
    $scope.sortbyprice = function() {
        $scope.sortprice = "price";
        $scope.sortrating = "";
        $scope.sortname = "";
        $scope.clickPrice = true;
        $scope.clickRating = false;
        $scope.clickName = false;
    }
    
    // sort by hotel rating
    $scope.sortbyrating = function() {
        $scope.sortprice = "";
        $scope.sortname = "";
        $scope.sortrating = "rating";
        $scope.clickPrice = false;
        $scope.clickRating = true;
        $scope.clickName = false;
    } 
}]);    