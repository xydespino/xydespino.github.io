var darkmode = false;

function bgtoggle() {
 if (!darkmode){
   document.getElementById("all").style.backgroundColor = "rgb(40, 40, 40)";
   document.body.style.backgroundColor = "rgb(40, 40, 40)";
   document.getElementById("all").style.color = "white";
   document.getElementById("darkmode").innerHTML = "Light Mode";
   darkmode = true;
  }
  
  
  else {
    document.getElementById("all").style.backgroundColor = "rgb(240, 240, 240)";
    document.body.style.backgroundColor = "rgb(240, 240, 240)";
    document.getElementById("all").style.color = "black";
    document.getElementById("darkmode").innerHTML = "Dark Mode";
    darkmode = false;
  }
}