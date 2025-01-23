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



  // Fade animation
  const textElement = document.getElementById('professionText');
  const textArray = [      
    " 🗺️ Traveller ✈️ ",
    " 🍓 Crêpe lover 🍌",
    " 🍹 Bartender 🍸",
    " 🐾 Frenchie Lover 🐾 ",
    " 🍫 Devourer 🥐",
    " 🏀 Enthusiast"];

    let currentIndex = 0;

    // Function to change text and apply fade-in effect
    function changeText() {
        // Fade out first by reducing opacity
        textElement.style.opacity = 0;
        
        // Wait for the fade-out to complete before changing the text
        setTimeout(function() {
            textElement.textContent = textArray[currentIndex]; // Update text content
            currentIndex = (currentIndex + 1) % textArray.length; // Cycle through text array
            
            // Fade in by increasing opacity
            textElement.style.opacity = 1;
        }, 1000); // 1 second to match the fade-out duration
    }

    // Trigger changeText every 3 seconds
    setInterval(changeText, 3000);

    // Start the first fade effect
    changeText();