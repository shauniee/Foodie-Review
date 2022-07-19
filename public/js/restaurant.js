// const { request } = require("express");

//This function is to call the restaurants api and get all the restaurants
function getRestaurantData(){
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/restaurants", true);
    
    //This function will be called when data returns from the web api
    request.onload = function(){
      //get all the restaurants records into our restaurant array
      restaurant_array = JSON.parse(request.responseText);
      fetchComments();
      // call the function so as to display all restaurants tiles
      filterRestaurants();
     displayRestaurants();
    };
    //This command starts the calling of the movies web api
    request.send();
}

    function getRestaurantAverage(){
      console.log("yoz")
    var updateRestaurant = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    var edit_restaurantrating_url = "http://localhost:8080/averageRating" + "/" + restaurant_array[currentIndex].restaurant;
    updateRestaurant.open("PUT", edit_restaurantrating_url , true); //The HTTP method called 'PUT' is used here as we are updating data
    updateRestaurant.setRequestHeader("Content-Type", "application/json");
    restaurant_array[currentIndex].restaurant = restaurant;
    updateRestaurant.onload = function() {
      getRestaurantData();
      console.log("hi")
      };
      updateRestaurant.send(JSON.stringify(restaurant_array[currentIndex]));
      console.log(restaurant_array[currentIndex])
    }

    function filterRestaurants(){         
      var table = document.getElementById("restaurantsTable");
      var restaurantCount = 0;    
      var message = "";   
      table.innerHTML = "";    
      totalRestaurants = restaurant_array.length;    
      for (var count = 0; count < totalRestaurants; count++) 
      {   
        if(restaurant_array[count].category_id==category){     
            var thumbnail = restaurant_array[count].image1;            
            var restaurant = restaurant_array[count].restaurant;  
            console.log(restaurant);          
            var cell = '<div class="card col-md-3" style="float: none; margin: 0 auto;">' +
            '<div class="bg-dark mystyle text-center py-3">'+
            '<h4>' + restaurant + '</h4>' +
            '</div>' +
            '<img class="img-fluid img-thumbnail" style="width: max; height: 250px;" src=' + thumbnail + ' />' +
            '<button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showRestaurantDetails(this)">See More</button>'+                     
            '<button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showRestaurantComments(this)" >Comments</button>'+
            '</div>';
      
                        console.log(cell)
             table.insertAdjacentHTML('beforeend', cell);            
             restaurantCount++;        
        }
      }     
    }
  
    function listNorth(){
      category=1;
      filterRestaurants(category)
    }
    function listSouth(){
      category=2;
      filterRestaurants(category)
    }
    function listEast(){
      category=3;
      filterRestaurants(category)
    }
    function listWest(){
      category=4;
      filterRestaurants(category)
    }

    function filterFoodTypes(){         
      var table = document.getElementById("restaurantsTable");
      var restaurantCount = 0;    
      var message = "";   
      table.innerHTML = "";    
      totalRestaurants = restaurant_array.length;    
      for (var count = 0; count < totalRestaurants; count++) 
      {   
        if(restaurant_array[count].foodType==foodType){     
            var thumbnail = restaurant_array[count].image1;            
            var restaurant = restaurant_array[count].restaurant;  
            console.log(restaurant);          
            var cell = '<div class="card col-md-3" style="float: none; margin: 0 auto;">' +
            '<div class="bg-dark mystyle text-center py-3">'+
            '<h4>' + restaurant + '</h4>' +
            '</div>' +
            '<img class="img-fluid img-thumbnail" style="width: max; height: 250px;" src=' + thumbnail + ' />' +
            '<button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showRestaurantDetails(this)">See More</button>'+                     
            '<button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showRestaurantComments(this)" >Comments</button>'+
            '</div>';
      
                        console.log(cell)
             table.insertAdjacentHTML('beforeend', cell);            
             restaurantCount++;        
        }
      }     
    }
  
    function listWestern(){
      foodType=1;
      filterFoodTypes(foodType)
    }
    function listThai(){
      foodType=2;
      filterFoodTypes(foodType)
    }
    function listDessert(){
      foodType=3;
      filterFoodTypes(foodType)
    }
    function listPancakes(){
      foodType=4;
      filterFoodTypes(foodType)
    }
    
    function displayRestaurants(){         
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;    
    var message = "";   
    table.innerHTML = "";    
    totalRestaurants = restaurant_array.length;    
    for (var count = 0; count < totalRestaurants; count++) 
    {         
          var thumbnail = restaurant_array[count].image1;            
          var restaurant = restaurant_array[count].restaurant;  
          console.log(restaurant);          
          var cell = '<div class="card col-md-3" style="float: none; margin: 0 auto;">' +
          '<div class="bg-dark mystyle text-center py-3">'+
          '<h4>' + restaurant + '</h4>' +
          '</div>' +
          '<img class="img-fluid img-thumbnail" style="width: max; height: 250px;" src=' + thumbnail + ' />' +
          '<button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showRestaurantDetails(this)">See More</button>'+                     
          '<button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showRestaurantComments(this)" >Comments</button>'+
          '</div>';
    
                      console.log(cell)
           table.insertAdjacentHTML('beforeend', cell);            
           restaurantCount++;        
      
    }    
    message = restaurantCount + " " + category;  
    document.getElementById("summary").textContent = message;   
    document.getElementById("parent").textContent = "";   
    }
    
    function showRestaurantDetails(element) {
      var item = element.getAttribute("item");
      currentIndex = item;
      document.getElementById("restaurant").textContent = restaurant_array[item].restaurant;
      document.getElementById("openingHours").textContent = restaurant_array[item].openingHours;
      document.getElementById("image1").src = restaurant_array[item].image1;
      document.getElementById("restaurantPhoneNumber").textContent = restaurant_array[item].restaurantPhoneNumber;
      document.getElementById("location").src = restaurant_array[item].location;
      document.getElementById("background").textContent = restaurant_array[item].background;
      document.getElementById("restaurantRating").textContent = restaurant_array[item].restaurantRating;
      document.getElementById("image2").src = restaurant_array[item].image2;
      document.getElementById("image3").src = restaurant_array[item].image3;
      document.getElementById("awards").src = restaurant_array[item].awards;
    }

    function restaurantWebsite() {
      window.open(restaurant_array[currentIndex].restaurantWebsite, "_blank");
    }
    
    function sortAscending(){
      var request = new XMLHttpRequest();
      request.open("GET", "http://localhost:8080/sortAscending", true);
      
      //This function will be called when data returns from the web api
      request.onload = function(){
        //get all the restaurants records into our restaurant array
        console.log(request.response)
        restaurant_array = JSON.parse(request.responseText);
        fetchComments();
        // call the function so as to display all restaurants tiles
       displayRestaurants();
      };
      //This command starts the calling of the movies web api
      request.send();
      }

      function sortRatingAscending(){
        var request = new XMLHttpRequest();
        request.open("GET", "http://localhost:8080/sortRatingAscending", true);
        
        //This function will be called when data returns from the web api
        request.onload = function(){
          //get all the restaurants records into our restaurant array
          console.log(request.response)
          restaurant_array = JSON.parse(request.responseText);
          fetchComments();
          // call the function so as to display all restaurants tiles
         displayRestaurants();
        };
        //This command starts the calling of the movies web api
        request.send();
        }


        document.getElementById('frmSearch').onsubmit = function() {
          window.location = 'http://www.google.com/search?q=site:http://localhost:8080/js/Mainpage.html ' + document.getElementById('txtSearch').value;
          return false;
      }
  
    