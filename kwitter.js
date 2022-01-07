var firebaseConfig = {
    apiKey: "AIzaSyBItT-0Tnwge1h39eqxaHmZZ4rEs_6cJKc",
    authDomain: "kwitter-app-by-tanmay.firebaseapp.com",
    databaseURL: "https://kwitter-app-by-tanmay-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-by-tanmay",
    storageBucket: "kwitter-app-by-tanmay.appspot.com",
    messagingSenderId: "916077784066",
    appId: "1:916077784066:web:2dedf4315d7b805ad1cb1b",
    measurementId: "G-9HCTBN5ZT9"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    //Room_names = childKey;

function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}