var mainApp = {};
(function(){
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid;
        }else{
            // redirect to login page
            user = null;
            window.location.replace('Login.html');
        }
      });

      function logOut(){
          firebase.auth().signOut();
      }
      
      mainApp.logOut = logOut;

})()

