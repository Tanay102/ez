var firebaseConfig = {
      apiKey: "AIzaSyD3vr_ccQIHIKR_VYKTxmah0sNtMBNsDyI",
      authDomain: "kwitter-30670.firebaseapp.com",
      databaseURL: "https://kwitter-30670-default-rtdb.firebaseio.com",
      projectId: "kwitter-30670",
      storageBucket: "kwitter-30670.appspot.com",
      messagingSenderId: "223642945354",
      appId: "1:223642945354:web:6b17c8fb266d6343c2e3b3",
      measurementId: "G-M78VE9FYNG"
    };

firebase.initializeApp(firebaseConfig);

var room_name = "";

var username = localStorage.getItem("key_username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room names : ", Room_names);

      var sub_div = "<div id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";

      document.getElementById("output").innerHTML+=sub_div;
      //End code
      });});}
getData();

function redirectToRoomName(room_name)
{
      localStorage.setItem("key_roomname" , room_name);
      window.location = "kwitter_page.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("key_roomname" , room_name);

      firebase.database().ref("/").child(room_name).update(
            {
                  purpose:"adding room name"
      });
      window.location="kwitter_page.html"
}

function logout()
{
     localStorage.removeItem("key_roomname");
     localStorage.removeItem("key_username");
     window.location = "index.html";
}
