var app_fireBase = {};
(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDJWwjytCr-dFjS0IQUhUKtoSkii4ZlPsw",
    authDomain: "foodie-review-dc559.firebaseapp.com",
    databaseURL: "https://foodie-review-dc559.firebaseio.com",
    projectId: "foodie-review-dc559",
    storageBucket: "foodie-review-dc559.appspot.com",
    messagingSenderId: "19646717847",
    appId: "1:19646717847:web:7743638fed8fbab2792ed2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_fireBase = firebase;
})()