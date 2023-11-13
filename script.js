function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  var toggleMenu = document.getElementsByClassName("ham-link");
  for (var i = 0; i < toggleMenu.length; i++) {
    toggleMenu[i].addEventListener('click', removeMenu, false);
  }
  function removeMenu(){
    console.log("im being clicked");
    document.getElementById("menuToggle").checked = false;
  }