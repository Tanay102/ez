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

var room_name = localStorage.getItem("key_roomname");
var user_name = localStorage.getItem("key_username");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push(
            {
                  name: user_name , 
                  message: msg ,  
                  likes: 0

            }
      );
      document.getElementById("message").value="";
}
