var multiplyer = 1;
var num_for_background = 0;
var background_upgrade_cost = 50;
var points = 0;
var points_needed = 50;
var ppc = 1;
var backgrounds = ["yellow", "orange", "green", "blue", "purple", "brown", "red", "black"];

function addpoint(){
  points = points + ppc * multiplyer;
  document.getElementById("points_displayed").innerHTML = "points " + points + "."}

function check_points(){
  if (points > points_needed - 1){
      ppc = ppc * 2 * multiplyer;
      points = points - points_needed;
      points_needed = points_needed * 2;
      document.getElementById("p-p-c").innerHTML = "points per click (" + ppc + ")"
      document.getElementById("points_displayed").innerHTML = "points " + points + "."
      document.getElementById("Upgrade_button").innerHTML =    "Upgrade Clicker (" + points_needed + ")"}}
    
function get_new_background(){
       if (points > background_upgrade_cost - 1){
          num_for_background = num_for_background + 1;
          multiplyer = multiplyer + 1;
          points = points - background_upgrade_cost;
          background_upgrade_cost = background_upgrade_cost * 2;
         document.getElementById("multiplyer_button").innerHTML = "Upgrade background (multiplyer) (" + background_upgrade_cost + ")";
          document.getElementById("points_displayed").innerHTML = "points " + points + ".";
          document.getElementById("everything").style.
       backgroundColor = backgrounds[num_for_background];
       document.getElementById("p-p-c").innerHTML = "points per click (" + ppc + ")"}}
         
         
         
