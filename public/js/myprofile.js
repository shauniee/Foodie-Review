function getUserData(){
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/myProfiles", true);

    //This function will be called when data returns from the web api
    request.onload = function(){
        //get all the restaurants records into our restaurant array
        console.log(request.response);
        myprofile_array = JSON.parse(request.responseText);
        console.log(myprofile_array);
    };
    //This command starts the calling of the movies web api
    request.send();
}

