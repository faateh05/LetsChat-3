
//ADD YOUR FIREBASE LINKS
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

  function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
}