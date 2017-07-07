document.addEventListener('DOMContentLoaded', function(){

// Set Variables
var body = document.querySelector("body");
var lightSwitch = document.querySelector("button.switch");
var statusText = document.querySelector('h1.status');
var count = 0;

lightSwitch.addEventListener('click', function(e){
e.preventDefault(e);
e.stopPropagation(e);


  if (lightSwitch.className === "switch on"){
    lightSwitch.className = "switch off";
    if (statusText.innerText === "It's so bright in here!"){
      statusText.innerText = "Hey, who turned off the lights?";
      if (body.className === "light"){
        body.className = "dark";
      }

  }
} else{ lightSwitch.className = "switch on";
statusText.innerText = "It's so bright in here!";
body.className = "light";

}

if (count > 5) {
  var lightning = document.querySelector('img');
  statusText.innerText = "MALFUNCTION!!!!";
  statusText.style.color = "purple"
   setInterval(function() {

       statusText.style.display = (statusText.style.display == '' ? 'none' : '');
   }, 600);
   setInterval(function() {
  body.style.backgroundColor =   (body.style.backgroundColor == "black" ? "red" :"black" );
}, 400);

  lightning.style.display = ("block")
}

count ++;
});














  // End of DOM
});
