
var partonevisible = false;
function toggle() {
    if (!partonevisible){
      document.getElementById("introdiv").className = "coolfont2 show"; 
        partonevisible = true;
  }
     
    else{
         document.getElementById("introdiv").className =          "coolfont2 hide"; 
          partonevisible = false;
  
  
}
}

var parttwovisible = false;
function toggle2() {
    if (!parttwovisible){
      document.getElementById("pydiv").className = "coolfont2 show"; 
        parttwovisible = true;
  }
     
    else{
         document.getElementById("pydiv").className =          "coolfont2 hide"; 
          parttwovisible = false;
  
  
}
}

var partthreevisible = false;
function toggle3() {
    if (!partthreevisible){
      document.getElementById("div3").className = "coolfont2 show"; 
        partthreevisible = true;
  }
     
    else{
         document.getElementById("div3").className =          "coolfont2 hide"; 
          partthreevisible = false;
  
  
}
}

var bigtilt = 1;
var bigdown = 1;

function hov() {
  document.getElementById("divvy").style.transform = "translateY(" + bigdown + "px) rotate(-" + bigtilt + "deg)";
  bigtilt+=10;
  
  bigdown+=50;
}



function out(){
  document.getElementById("divvy").style.transform = "translateY(-3px) rotate(2deg)";
  

  
}


function getrandomnum(){
  document.getElementById("the_random_num").innerHTML =  Math.round(Math.random() * 101)
 if (document.getElementById("the_random_num").innerHTML == 100){
    document.getElementById("the_random_num").innerHTML = "its 100 you win!"}
  
  if (document.getElementById("the_random_num").innerHTML == 101){
    document.getElementById("the_random_num").innerHTML = "you got 101 shh its a secret number."}
  
  
}