var config = {
    apiKey: "AIzaSyDXQixVgedAZmg8uFHlbVK5LaZiqghf7tw",
  authDomain: "friendlychat-55f4c.firebaseapp.com",
  databaseURL: "https://friendlychat-55f4c.firebaseio.com",
  projectId: "friendlychat-55f4c",
  storageBucket: "friendlychat-55f4c.appspot.com",
  messagingSenderId: "1061156891120",
  appId: "1:1061156891120:web:f884b1e126b62cbf7e5535",
  measurementId: "G-EZSBC50K62"
 
  };
     firebase.initializeApp(config);
    console.log(firebase);

var us=document.getElementById("user");
us.textContent=sessionStorage.getItem("emails");

document.getElementById("log").addEventListener("click",logo);
function logo(){
    
     firebase.auth().signOut();

}


firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(!user){

       window.open('index1.html','_self');
   } 
   
    
});
