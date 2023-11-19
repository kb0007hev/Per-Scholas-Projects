    // Add an event listener to the instructional button to show the popup dialog
    const instructionButton = {
      open: function() {
        const openbutton = document.getElementById('instructional-button');
        openbutton.addEventListener('click', this.showPopup);
    
        const closeButton = document.getElementById('close-button');
        closeButton.addEventListener('click', this.hidePopup);
      },
    
      showPopup: function() {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
      },
    
      hidePopup: function() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
      }
    };

    instructionButton.open();
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  // CLASSES 

  const location = {
       timeoutId: null,
     
       init: function() {
         const boxes = document.querySelectorAll('.box');

         boxes.forEach((box) => {
           box.addEventListener('click', location.boxClickHandler)[0];
         });
       },
     
       boxClickHandler: function() {
         clearTimeout(location.timeoutId); // Clear the previous timeout, if any
     
         // Rotate the box on click
         this.classList.toggle('open');
     
         // Toggle the visibility of the iframe behind the box
         const iframe = document.querySelector('.pic');
         iframe.style.visibility = this.classList.contains('open') ? 'visible' : 'hidden';
     
         // Close the box after 2 seconds
       location.timeoutId = setTimeout(() => {
           this.classList.remove('open');
           iframe.style.visibility = 'hidden';
           // Display alert message after the box closes
           alert("What in the hell!\nWhat's the matter with you? Can't you see I'm using it !!!");
         alert("Home owner called the cops on you for breaking into his home. You have been arrested and taken into jail.");
         alert("Game Over you lose!");
         }, 8000);
       }
     };
     
     // Call the init function to initialize the event listeners
     location.init();
  

  

   
///////////////////////////////////////////////////////////////////////////////////
//OBJECTS

