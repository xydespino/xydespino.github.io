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



  let counter = 0;
  const messages = [
      " 🗺️ Traveller ",
      " 🍓Crêpe lover ",
      " 🍫 devourer 🥐",
      " 🍹Bartender🍸",
      " 🏀 Enthusiast"
  ];

  function changeText() {
      const h1Element = document.getElementById('professionText');
      
      // Add fade-out class to start fading out
      h1Element.classList.add('fade-out');
      console.log('this is working')
      // Wait for the fade-out to complete (1s), then change the text
      setTimeout(() => {
          h1Element.textContent = messages[counter];
          
          // Remove fade-out class and trigger fade-in
          h1Element.classList.remove('fade-out');
          
          // Increment the counter and reset it when it reaches the end of the array
          counter = (counter + 1) % messages.length;
      }, 1000); // Delay for fade-out to complete
  }

  // Set interval to change the text every 5 seconds
  setInterval(changeText, 5000);

  // Change text immediately when the page loads
  window.onload = changeText;