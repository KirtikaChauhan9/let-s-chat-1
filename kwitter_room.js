
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCxz-pu_6FJQEoqd9aEoktVfuQ7HYHISzk",
    authDomain: "let-s-chat-webapp.firebaseapp.com",
    projectId: "let-s-chat-webapp",
    storageBucket: "let-s-chat-webapp.appspot.com",
    messagingSenderId: "82647985308",
    appId: "1:82647985308:web:d49a894bd84c83a74dd159"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
