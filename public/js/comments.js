function fetchComments() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/comments" , true);
  
    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    console.log(request.response);
    comment_array = JSON.parse(request.responseText);
  
    };
  
    request.send();
  }
  //This function is to display all the comments of that movie
  //whenever the user click on the "comment" button
  function showRestaurantComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
  
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].restaurant;
    document.getElementById("commentBody").textContent = "";
  
    for (var i = 0; i < comment_array.length; i++) {
      console.log(comment_array[i].foodImage)
      console.log(restaurant_array[item].restaurant)
        if (comment_array[i].restaurant_id == restaurant_array[item].restaurant_id) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedRestaurantId = restaurant_array[item]._id;
            star = "";
            console.log(html)
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \                                                                   \
                                <iframe src="" width="200" height="100" frameborder="0" style="border:0;" allowfullscreen aria-hidden="false" tabindex="0" id="foodImage'+ i +'">'+ comment_array[i].foodImage +'</iframe>\                   	                        \
                                    <br id="rating' + i + '">Rating:' + comment_array[i].rating + "</br>               \
                                    <br id=review" + i + ' ">' + comment_array[i].review + "</br>            \
                                    <br>                                                                                        \
                                    <small>" + comment_array[i].datePosted + "</small>                                          \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);
  
            // var star = "";
            // for (var j = 0; j < comment_array[i].rating; j++) {
            //     console.log(i);
            //     star += "<img src='images/popcorn.png' style='width:50px' />";
            // }
            star += "<img src='images/delete.png' class='edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' />";
            star += "<img src='images/edit.png' class='edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='"
     + i + "' onClick='editComment(this)' />";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
  }
  function newComment() {
    //Initialise each HTML input elements in the modal window with default value.
        rating = 0;
        document.getElementById("profileid").value = ""; 
        document.getElementById("userComments").value = "";
        document.getElementById("rating").value = "";
        document.getElementById("foodimage").src = "";
    } 
  // Submit or send the new comment to the server to be added.
  function addComment() {
    var comment = new Object();
    comment.restaurant_id = restaurant_array[currentIndex].restaurant_id;  
    comment.myprofile_id = document.getElementById("profileid").value; 
    comment.rating = document.getElementById("rating").value; 
    comment.review = document.getElementById("userComments").value; // Value from HTML input text
    comment.foodImage = document.getElementById("foodimage").src; 
    comment.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
  
    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment
  
    postComment.open("POST", "http://localhost:8080/comments", true); //Use the HTTP POST method to send data to server
  
    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function() {
        fetchComments(); // fetch all comments again so that the web page can have updated comments.     
    };
  // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comment)); 
  }

  //This function will hide the existing modal and present a modal with the selected comment
  //so that the user can attempt to change the username, rating or movie review
  function editComment(element) {
    var item = element.getAttribute("item");
  
    currentIndex = item;
  
    console.log(comment_array)
    document.getElementById("editrating").value = comment_array[item].rating;
    document.getElementById("edituserComments").value = comment_array[item].review;
    document.getElementById("editimage").src = comment_array[item].foodImage;
    console.log(comment_array[item].rating);
  }
  
  //This function sends the Comment data to the server for updating
  function updateComment() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
    var edit_comment_url = "http://localhost:8080/comments" + "/" + comment_array[currentIndex].comments_id;
    var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    console.log(updateComment)
    console.log("hi")
    updateComment.open("PUT", edit_comment_url , true); //The HTTP method called 'PUT' is used here as we are updating data
    updateComment.setRequestHeader("Content-Type", "application/json");
    comment_array[currentIndex].foodImage = document.getElementById("editimage").value;
    comment_array[currentIndex].review = document.getElementById("edituserComments").value;
    comment_array[currentIndex].rating = document.getElementById("editrating").value;
    updateComment.onload = function() {
    fetchComments();
    };
    console.log(fetchComments)
    updateComment.send(JSON.stringify(comment_array[currentIndex]));
    console.log(comment_array[currentIndex])
    }
    }
    
  //This function deletes the selected comment in a specific movie
  function deleteComment(element) {
    var response = confirm("Are you sure you want to delete this comment?");
  
    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_comment_url = "http://localhost:8080/comments" + "/" + comment_array[item].comments_id;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url , true);
        eraseComment.onload = function() {
            fetchComments();
        };
        eraseComment.send();
    }
  }           