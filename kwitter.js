function addUser()
{
    var username = document.getElementById("user_name").value;
    localStorage.setItem("key_username", username);
    window.location="kwitter_room.html";
}

