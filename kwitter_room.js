var firebaseConfig = {
      apiKey: "AIzaSyDOGq81LIMhFOPNhY4ntcYrRsKDvdEFdU8",
      authDomain: "newkwitter-da0bb.firebaseapp.com",
      databaseURL: "https://newkwitter-da0bb-default-rtdb.firebaseio.com",
      projectId: "newkwitter-da0bb",
      storageBucket: "newkwitter-da0bb.appspot.com",
      messagingSenderId: "821811237294",
      appId: "1:821811237294:web:64563a18507b15b7a8783f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
     purpose: "adding Room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room name-"+Room_names);
     row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
     //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
 function logout() {
     
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            
            window.location ="index.html";
          
 }