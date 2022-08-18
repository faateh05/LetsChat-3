//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAiHGp0ruLhENViu-jA3MNh8SGCDf4LHt4",
      authDomain: "kwitter-b816c.firebaseapp.com",
      projectId: "kwitter-b816c",
      storageBucket: "kwitter-b816c.appspot.com",
      messagingSenderId: "422604426881",
      appId: "1:422604426881:web:5c5791aa153b1dffc04780",
      measurementId: "G-TT9EJXY5YZ"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}