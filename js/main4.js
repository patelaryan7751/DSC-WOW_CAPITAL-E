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
var i=0;

var hjcordiref= firebase.database().ref(`${sessionStorage.getItem("uids")}`);
     hjcordiref.orderByChild('roomname').on("child_added", function(data){
          var newVoke = data.val();
         console.log(data.val());
         if(newVoke.roomname){
         var uri=`https://patelaryan7751.github.io/DSC-WOW_CAPITAL-E/studass.html?uid=${sessionStorage.getItem("uids")}&roomname=${newVoke.roomname}`;
         var res=encodeURI(uri);
         i=i+1;
         var html = "";
          html +=`<div class="col-lg-4 col-sm-12 mt-4" >
      
      <div class="card-body"  style="background-color: aliceblue">
<div class="row">
<div class="col-5">
        <h5 class="card-field card-title" style="font-weight:700;">${newVoke.roomname}</h5>



</div>
<div class="col-7" style="margin-left=90%">
       <img src="images/assigno.png" class="img-fluid" width="100px" height="25px"> 
</div>
       </div> 
          


<a  style="display: inline-block" href="https://patelaryan7751.github.io/DSC-WOW_CAPITAL-E/teachass.html?uid=${sessionStorage.getItem("uids")}&roomname=${newVoke.roomname}" class="mt-2 btn btn-success">Open</a>
<br>

<input type="text" value="${res}" 
id="myInput${i}">

<div class="tooltip1">
<button data-id="${i}" onclick="myFunction(this)" onmouseout="outFunc(this)" class="btn btn-info">
  <span class="tooltiptext" id="myTooltip${i}">Copy to clipboard</span>
  Copy text
  </button>
</div>
      </div>
    </div>
`

          document.getElementById("classe").innerHTML += html;
         }
     });

var us=document.getElementById("user");
us.textContent=sessionStorage.getItem("emails");
document.getElementById("create").addEventListener("click",cretef);
function cretef(){
    
     window.open('createclass.html','_self');

}

document.getElementById("log").addEventListener("click",logo);
function logo(){
    
     firebase.auth().signOut();

}


firebase.auth().onAuthStateChanged(function(user) {
 
 
   if(!user){

       window.open('index1.html','_self');
   } 
   
    
});
